import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  
  user: any;
  subscription: Subscription;

  private weaveCollection: any;
  public weaves: any;

  public users: any;

  public fromMe: any;
  public forMe: any;
  public forOthers: any;

  constructor(private db: AngularFirestore, private auth: AuthService) { 
    this.weaveCollection = db.collection('weaves');
    this.weaves = this.weaveCollection.valueChanges();

    this.users = db.collection('users').valueChanges();

    this.subscription = this.auth.getUser().subscribe(update => { 
      if (update.user) {
        this.user = update.user; 
        this.fromMe = db.collection('weaves', ref => ref.where('creator.id', '==', this.user.uid)).valueChanges();
        this.forMe = db.collection('weaves', ref => ref.where('members', 'array-contains', {
          id: this.user.uid,
          displayName: this.user.displayName,
          email: this.user.email
        })).valueChanges();
        this.forOthers = db.collection('weaves', ref => ref.limit(10)).valueChanges();
      } else {
        this.fromMe = null;
        this.forMe = null;
        this.forOthers = null;
      }
    });
  }

  createWeave(title, purpose, creator, members) {
    var id = this.db.createId();
    this.weaveCollection.doc(id).set({
      id: id,
      title: title,
      purpose: purpose,
      creator: creator,
      members: members
    });
  }

  deleteWeave(weave) {
    this.weaveCollection.doc(weave.id).delete();
  }

  getUsers() {
    return this.users;
  }
}

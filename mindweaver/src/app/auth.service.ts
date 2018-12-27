import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subject = new Subject<any>();
  user: any;

  constructor(public afAuth: AngularFireAuth, private db: AngularFirestore) { 
    this.user = afAuth.auth.currentUser;
    afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.updateUser(user);
        db.collection('users').doc(user.uid).set({ 
          id: user.uid, 
          displayName: user.displayName, 
          email: user.email 
        });
      } else {
        this.clearUser();
      }
    })
  };

  updateUser(user: any): void {
    this.subject.next({ user: user });
    this.user = user;
  }

  clearUser(): void {
    this.subject.next({ user: null });
    this.user = null;
  }

  getUser(): Observable<any> {
    return this.subject.asObservable();
  }

  getInitialUser(): any {
    return this.user;
  }

  login(): void {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }
}

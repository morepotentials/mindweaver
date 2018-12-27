import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-weave',
  templateUrl: './weave.component.html',
  styleUrls: ['./weave.component.css']
})
export class WeaveComponent implements OnInit {

  title: String;
  purpose: String;
  selectedUsers: Array<Object> = [];

  constructor(private db: DbService, private auth: AuthService) {}

  ngOnInit() {
    
  }

  clickUser(user):void {
    if (!this.selectedUsers.includes(user)) {
      this.selectedUsers.push(user);
    } else {
      this.selectedUsers.splice(this.selectedUsers.indexOf(user), 1);
    }
  }

  createWeave() {
    var user = this.auth.getInitialUser();
    var creator = {
      id: user.uid, 
      displayName: user.displayName, 
      email: user.email
    }
    this.db.createWeave(this.title, this.purpose, creator, this.selectedUsers);
  }

  deleteWeave(weave) {
    this.db.deleteWeave(weave);
  }

}

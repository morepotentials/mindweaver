import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  user: any;
  subscription: Subscription;

  constructor(private authService: AuthService, private ref: ChangeDetectorRef) {
    this.subscription = this.authService.getUser().subscribe(update => { 
      this.user = update.user; 
      ref.detectChanges();
    });
  }

  login() {
    this.authService.login();
  }

  ngOnInit() {
    this.user = this.authService.getInitialUser();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

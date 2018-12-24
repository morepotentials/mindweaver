import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  collapse: Boolean = true;
  user: any;
  subscription: Subscription;

  constructor(private authService: AuthService, private ref: ChangeDetectorRef, public router: Router) {
    this.subscription = this.authService.getUser().subscribe(update => { 
      this.user = update.user; 
      ref.detectChanges();
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    setInterval(() => {
      console.log(this.router.url);
    }, 500);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

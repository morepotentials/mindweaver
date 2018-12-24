import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-forme',
  templateUrl: './forme.component.html',
  styleUrls: ['./forme.component.css']
})
export class FormeComponent implements OnInit, OnDestroy {

  user: any;
  subscription: Subscription;

  constructor(private authService: AuthService, private ref: ChangeDetectorRef, private router: Router) {
    this.subscription = this.authService.getUser().subscribe(update => { 
      this.user = update.user; 
      ref.detectChanges();
      if (!this.user) {
        this.router.navigate(['/'])
      }
    });
  }

  ngOnInit() {
    this.user = this.authService.getInitialUser();
    if (!this.user) {
      this.router.navigate(['/'])
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

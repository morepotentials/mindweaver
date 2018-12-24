import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { FormeComponent } from './forme/forme.component';
import { FrommeComponent } from './fromme/fromme.component';
import { ForothersComponent } from './forothers/forothers.component';
import { WeaveComponent } from './weave/weave.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormeComponent,
    FrommeComponent,
    ForothersComponent,
    WeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

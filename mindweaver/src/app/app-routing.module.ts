import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeaveComponent } from './weave/weave.component';
import { FormeComponent } from './forme/forme.component';
import { FrommeComponent } from './fromme/fromme.component';
import { ForothersComponent } from './forothers/forothers.component';


const routes: Routes = [
  { path: '', component: WeaveComponent },
  { path: 'for_me', component: FormeComponent },
  { path: 'from_me', component: FrommeComponent },
  { path: 'for_others', component: ForothersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

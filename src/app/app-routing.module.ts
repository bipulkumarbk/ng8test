import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutusComponent} from '../app/aboutus/aboutus.component';
import {ContactusComponent} from '../app/contactus/contactus.component';
import {HomeComponent} from '../app/home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NewregisterComponent} from './newregister/newregister.component';
import {HomepageComponent} from './homepage/homepage.component'

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'newregister',
    component:NewregisterComponent
  },
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'',
    redirectTo:'/homepage',
    pathMatch:'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

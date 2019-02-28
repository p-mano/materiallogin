import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NewregisterComponent} from './newregister/newregister.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'newregister',
    component:NewregisterComponent
  },
  // {
  //   path:'',
  //   redirectTo:'/newregister',
  //   pathMatch:'full'
  // }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import {ForgotPassComponent} from './Components/forgot-pass/forgot-pass.component'; 
import { ResetPassComponent } from './Components/reset-pass/reset-pass.component';

const routes: Routes = [
  {path:'Register',component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'forgotpass', component:ForgotPassComponent},
  {path:'reset', component:ResetPassComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

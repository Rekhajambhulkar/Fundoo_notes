import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import {ForgotPassComponent} from './Components/forgot-pass/forgot-pass.component'; 
import { ResetPassComponent } from './Components/reset-pass/reset-pass.component';
import {DashboardComponent} from './Components/dashboard/dashboard.component';
import {GetAllNotesComponent} from './Components/get-all-notes/get-all-notes.component';
import {ArchiveComponent} from './Components/archive/archive.component';
import {TrashComponent} from './Components/trash/trash.component';

const routes: Routes = [
  {path:'Register',component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'forgotpass', component:ForgotPassComponent},
  {path:'resetpassword/:token', component:ResetPassComponent},
  {path: 'dashboard', component:DashboardComponent, 
  children: [
    {path: 'notes', component:GetAllNotesComponent},
    {path: 'archive', component:ArchiveComponent},
    {path: 'trash', component:TrashComponent},
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

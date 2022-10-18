import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './auth.guard';
import { ApplicantComponent } from './applicant/applicant.component';
import { AlldetailsComponent } from './alldetails/alldetails.component';
import { ApplicantdataComponent } from './applicantdata/applicantdata.component';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:LoginformComponent,},
  {path:'home',component:HomeComponent ,canActivate:[AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]}, 
  {path: 'applicant', component: ApplicantComponent,canActivate:[AuthGuard]},
  {path: 'alldetails', component: AlldetailsComponent},
  {path:'Applicantdata',component:ApplicantdataComponent},
  {path: 'HeaderComponent', component:HeaderComponent},
  {path:'**',redirectTo:'dashboard' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent]

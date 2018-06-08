import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { MentorRegistrationComponent } from './mentor-registration/mentor-registration.component';

import { StudentAuthGuard } from './guards/StudentAuthGuard';
import { MentorAuthGuard } from './guards/MentorAuthGuard';
import { AuthGuard } from './guards/AuthGuard';


import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectRegistrationComponent } from './project-registration/project-registration.component';



const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  { path: '', component: HomeComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'success', component: RegistrationSuccessComponent, canActivate: [AuthGuard] },
  { path: 'projectsList', component: ProjectsListComponent, canActivate: [StudentAuthGuard] },
  { path: 'projectDetails/:id', component: ProjectDetailsComponent},
  { path: 'projectRegistration', component: ProjectRegistrationComponent},
  { path: '**', component: LoginComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';



import { StudentAuthGuard } from '../guards/StudentAuthGuard';
import { MentorAuthGuard } from '../guards/MentorAuthGuard';
import { LoginAuthGuard } from '../guards/LoginAuthGuard';

import { LogoutComponent } from '../logout/logout.component';
import { LoginService } from '../login.service';
import { StudentRegistrationComponent } from './student-registration.component';
import { ProjectsListComponent } from '../projects-list/projects-list.component';


const studentRoutes: Routes = [
  { path: '', component: StudentRegistrationComponent, children:[{
      path: 'projectsList',
      component: ProjectsListComponent
  }] },
  
];


@NgModule({
  imports: [
    RouterModule.forChild(studentRoutes)
  ],
  exports:[RouterModule],
  providers: [StudentAuthGuard, MentorAuthGuard, LoginAuthGuard, LoginService]
})
export class StudentModule { }

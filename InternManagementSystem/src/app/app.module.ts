import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { MentorRegistrationComponent } from './mentor-registration/mentor-registration.component';

import { StudentAuthGuard } from './guards/StudentAuthGuard';
import { MentorAuthGuard } from './guards/MentorAuthGuard';
import { AuthGuard } from './guards/AuthGuard';

import { FlashMessagesService, FlashMessagesModule } from 'angular2-flash-messages';

import { LogoutComponent } from './logout/logout.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { LoginService } from './login.service';

import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';


import { AppRoutingModule } from './app.routing';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectRegistrationComponent } from './project-registration/project-registration.component';
import { DataShareService } from './data-share.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { Http, HttpModule } from '@angular/http';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentRegistrationComponent,
    MentorRegistrationComponent,
    LogoutComponent,
    ProjectsListComponent,
    RegistrationSuccessComponent,
    ProjectDetailsComponent,
    ProjectRegistrationComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    FlashMessagesModule
  ],
  providers: [StudentAuthGuard, AuthService, FlashMessagesService, ValidateService, AuthGuard, LoginService, DataShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }

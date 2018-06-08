import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usertypes:string[];
  title: string;
  emailPattern: string;
  username: string;
  password: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.usertypes = ['student', 'mentor'];
    this.title = 'Intern Management System';
    this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  
  }

  login(loginForm):void{
    if(loginForm.value.userType === "student"){
        sessionStorage.setItem('currentUser', 'student');
        this.router.navigate(['./studentRegistration']);
      }
    else if(loginForm.value.userType === "mentor"){
      sessionStorage.setItem('currentUser', 'mentor');
      this.router.navigate(['./mentorRegistration']);
    }

    const user = {
      username: loginForm.value.username,
      password: loginForm.value.password
    }

    this.authService.authenticateUser(user).subscribe(data=>{
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show("You are now logged in", {cssClass:'alert-success', timeout: 5000});
        this.router.navigate(['./profile']);
      }
      else{
        this.flashMessage.show(data.msg, {cssClass:'alert-danger', timeout: 5000});
        this.router.navigate(['./login']);
      }
    })
      
    }
}

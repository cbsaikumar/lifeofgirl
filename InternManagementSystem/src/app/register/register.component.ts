import { Component, OnInit, ValueProvider } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usertypes: string[];
  username: string;
  password: string;
  usertype: string;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router  
  ) { }

  ngOnInit() {
    this.usertypes = ["Student","Mentor"];
  }

  onRegisterSubmit(){
    const user = {
      username : this.username,
      password : this.password,
      usertype : this.usertype
    }
  
  
  //Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show("Enter all the fields", {cssClass:'alert-danger', timeout: 3000});
      return false;
    }

    //Validate email
    if(!this.validateService.validateEmail(user.username)){
      this.flashMessage.show("Enter valid email id", {cssClass:'alert-danger', timeout: 3000});
      return false;
    }
    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show("You are now registered", {cssClass:'alert-success', timeout: 3000});
        this.router.navigate(['./login']);
      }
      else{
        this.flashMessage.show("Something went wrong", {cssClass:'alert-danger', timeout: 3000});
        this.router.navigate(['./register']);
      }
    })
  }
}

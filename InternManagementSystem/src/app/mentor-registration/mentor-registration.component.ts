import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms/src/directives/form_interface';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'mentor-registration',
  templateUrl: './mentor-registration.component.html',
  styleUrls: ['./mentor-registration.component.css']
})
export class MentorRegistrationComponent implements OnInit {

  usertype: string;
  email: string;
  mobile: string;
  dob: string;
  name: string;
  affiliation: string;
  position_of_responsibility: string;
  association_with_log: string;
  log_id: string;
  log_objective_desc: string;

  emailPattern: string;
  photoUrl: string;
  profile: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.usertype = "Mentor";
    this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    this.email = JSON.parse(this.authService.getUserData()).username;

    this.authService.getProfile(this.email).subscribe(profile => {
      this.profile = profile;
      this.usertype = this.profile.user.usertype;
      this.email = this.profile.user.username;
      this.mobile = this.profile.user.mobile;
      this.dob = this.profile.user.dob;
      this.name = this.profile.user.name;
      this.affiliation = this.profile.user.affiliation;
      this.position_of_responsibility = this.profile.user.position_of_responsibility;
      this.association_with_log = this.profile.user.association_with_log;
      this.log_id = this.profile.user.log_id;
      this.log_objective_desc = this.profile.user.log_objective_desc;
    });

    }

  register():void{
    const profile = {
      usertype : this.usertype,
      username : this.email,
      name : this.name,
      dob : this.dob,
      mobile : this.mobile,
      affiliation: this.affiliation,
      position_of_responsibility: this.position_of_responsibility,
      association_with_log: this.association_with_log,
      log_id: this.log_id,
      log_objective_desc: this.log_objective_desc
  };

  //Register User
  this.authService.registerProfile(profile).subscribe(data => {
    if(data.success){
      this.flashMessage.show("Profile updated", {cssClass:'alert-success', timeout: 3000});
      this.router.navigate(['./projectsList']);
    }
    else{
      this.flashMessage.show("Something went wrong", {cssClass:'alert-danger', timeout: 3000});
      this.router.navigate(['./profile']);
    }
   });
  }

}

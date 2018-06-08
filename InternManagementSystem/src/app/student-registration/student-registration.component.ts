import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms/src/directives/form_interface';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  usertype: string;
  email: string;
  cgpa: string;
  mobile: string;
  college: string;
  specialization: string;
  year_of_study: string;
  dream_job: string;
  dob: string;
  aadhaar: string;
  name: string;
  dreamJobs: string[];

  profile: any;

  emailPattern: string;
  photoUrl: string;
  constructor(
    private router: Router,
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    this.usertype = "Student";
    this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    this.dreamJobs = ['Software Engineer', 'Core Job', 'Entrepreneur', 'Civil Services', 'Higher Studies', 'Research/Scientist', 'Other'];

    this.email = JSON.parse(this.authService.getUserData()).username;
    this.authService.getProfile(this.email).subscribe(profile => {
      console.log('profile', profile);
      if(profile.user){
        console.log('user', profile.user);
        this.profile = profile.user;

        this.usertype = this.profile.usertype;
        this.email = this.profile.username;
        this.mobile = this.profile.mobile;
        this.dob = this.profile.dob;
        this.name = this.profile.name;
        this.cgpa = this.profile.cgpa;
        this.year_of_study = this.profile.year_of_study;
        this.dream_job = this.profile.dream_job;
        this.specialization = this.profile.specialization;
        this.college = this.profile.college;
        this.aadhaar = this.profile.aadhaar;
      }
    });
  }

  register():void{
     const profile = {
      usertype : this.usertype,
      username : this.email,
      name : this.name,
      dob : this.dob,
      aadhaar : this.aadhaar,
      mobile : this.mobile,
      college : this.college,
      specialization : this.specialization,
      year_of_study : this.year_of_study,
      cgpa : this.cgpa,
      dream_job : this.dream_job
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

  readUrl(event: any): any{
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.photoUrl = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}

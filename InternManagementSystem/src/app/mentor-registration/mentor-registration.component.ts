import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms/src/directives/form_interface';
import { Router } from '@angular/router';

@Component({
  selector: 'mentor-registration',
  templateUrl: './mentor-registration.component.html',
  styleUrls: ['./mentor-registration.component.css']
})
export class MentorRegistrationComponent implements OnInit {

  userType: string;
  currentUser: string;
  emailPattern: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.userType = "Mentor";
    this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    this.currentUser = sessionStorage.getItem('currentUser');
  }

  register(formData:any):void{

    console.log("formData", formData.value);
    this.router.navigate(['./success']);

  }

}

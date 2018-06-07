import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms/src/directives/form_interface';
import { Router } from '@angular/router';

@Component({
  selector: 'student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  userType: string;
  currentUser: string;
  emailPattern: string;
  dreamJobs: string[];
  photoUrl: string;
  aadhaarPattern: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.userType = "Student";
    this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    this.aadhaarPattern= "/^\d{12}$/";
    this.dreamJobs = ['Software Engineer', 'Core Job', 'Entrepreneur', 'Civil Services', 'Higher Studies', 'Research/Scientist', 'Other'];
    this.currentUser = sessionStorage.getItem('currentUser');
  }

  register(formData:any):void{
    console.log("formData", formData.value);
    this.router.navigate(['./success']);

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

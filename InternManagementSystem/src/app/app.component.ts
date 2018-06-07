import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Intern Management System';

  constructor(private router : Router, private loginService: LoginService){};

  logout() : void{
    sessionStorage.removeItem("currentUser");
    this.router.navigate(['./logout']);

  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string = 'Intern Management System';

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router  
  ) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('You are logged out!', {cssClass:'alert-success', timeout: 3000});
    this.router.navigate(['/login']);
    return false;
  }
}

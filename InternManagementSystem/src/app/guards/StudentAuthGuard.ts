import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { LoginService } from '../login.service';

@Injectable()
export class StudentAuthGuard implements CanActivate, CanActivateChild  {
    constructor(private router: Router, private loginService: LoginService) { }
    canActivate() {
        if (sessionStorage.getItem('currentUser') == 'student') {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }

    canActivateChild() {
        if(this.loginService.getUserLoggedIn() === 'student'){ 
            return true;
        }
        return false;
    }
}
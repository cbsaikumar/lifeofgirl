import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable()
export class MentorAuthGuard implements CanActivate  {
    constructor(private router: Router, private authService: AuthService) { }
    canActivate() {
        if (JSON.parse(this.authService.getUserData()).usertype === 'mentor') {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        return false;
    }
}
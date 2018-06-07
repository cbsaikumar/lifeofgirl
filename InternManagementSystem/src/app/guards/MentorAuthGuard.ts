import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class MentorAuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate() {
        if (sessionStorage.getItem('currentUser') == 'mentor') {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }
  
  isUserLoggedIn(): boolean{
    if(sessionStorage.getItem('currentUser')){
      return true;
    }
    return false;
  }

  getUserLoggedIn(): string{
    if(sessionStorage.getItem('currentUser')){
      return sessionStorage.getItem('currentUser');
    }
  }
}

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  isDev: any;
  // private registerUrl: string = 'users/register';
  // private authenticateUrl: string = 'users/authenticate';
  // private profileUrl: string = 'users/profile';
  private registerUrl: string = 'http://localhost:5000/users/register';
  private authenticateUrl: string = 'http://localhost:5000/users/authenticate';
  private profileUrl: string = 'http://localhost:5000/users/profile';
  
  private authToken: any;
  private user: any;

  constructor(private http: Http) { 
    this.isDev = false;
  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.registerUrl, user, {headers: headers})
      .map(res => res.json());
  }

  getProfile(username) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    headers.append('username', username);
    return this.http.get(this.profileUrl, {headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.authenticateUrl, user, {headers: headers})
      .map(res => res.json());
  }
  registerProfile(profile){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.profileUrl, profile, {headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user){
    sessionStorage.setItem('id_token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getUserData(): any{
    const user = sessionStorage.getItem('user');
    return user;
  }

  loadToken(){
    const token = sessionStorage.getItem('id_token');
    this.authToken = token;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    sessionStorage.clear(); 
  }

  isLoggedIn(){
    return sessionStorage.getItem('id_token');
  }
  
  getUserType(){
    return JSON.parse(sessionStorage.getItem('user')).usertype;
  }
}

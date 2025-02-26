import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userEmailStore = new BehaviorSubject<string>('');
  //random JWT for login simulation
  private userToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6ImE2MGIwMTE5ZTFmZGI2NDcyZDM4M2QzNWZhNTc3YzY2In0.e30.b_5xUwUEhOg523v_nT4mtT6R6R5sul2Ek3pGA9jcsyGoLKOExH324hAGI1e8Tig8j1ICZfpx2Z7_Y0UOwrsEEQ';

  constructor(private router: Router) {}

  //emit user email ro userEmailStore subscribers, set userToken in localStorage and navigate to home page
  login(email: string, password: string) {
    //normally here should be a request sent to the server to get the JWT and perform other actions
    this.userEmailStore.next(email);
    localStorage.setItem('userToken', this.userToken);
    this.router.navigate(['/home']);
  }

  //emit empty string to userEmailStore subscribers, remove userToken and navigate to login page
  logout() {
    this.userEmailStore.next('');
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  //check if userToken exists in localStorage
  isAuthenticated(): boolean {
    return localStorage.getItem('userToken') ? true : false;
  }

  //to get user email address from Observable
  getUserEmail(): Observable<string> {
    return this.userEmailStore.asObservable();
  }
}

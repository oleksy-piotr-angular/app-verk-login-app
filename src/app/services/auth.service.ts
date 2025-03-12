import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userEmailStore: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  //random JWT for login simulation
  private userToken: string =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6ImE2MGIwMTE5ZTFmZGI2NDcyZDM4M2QzNWZhNTc3YzY2In0.e30.b_5xUwUEhOg523v_nT4mtT6R6R5sul2Ek3pGA9jcsyGoLKOExH324hAGI1e8Tig8j1ICZfpx2Z7_Y0UOwrsEEQ';

  public constructor(private router: Router) {}

  //set userToken and user email in localStorage and navigate to home page
  public login(email: string, password: string): void {
    //normally here should be a request sent to the server to get the JWT and perform other actions
    localStorage.setItem('userToken', this.userToken);
    localStorage.setItem('userEmail', email);
    this.router.navigate(['/home']);
  }

  //remove userToken and userEmail from localStorage and navigate to login page
  public logout(): void {
    this.userEmailStore.next('');
    localStorage.removeItem('userToken');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/login']);
  }

  //check if userToken exists in localStorage
  public isAuthenticated(): boolean {
    return localStorage.getItem('userToken') ? true : false;
  }

  //get user email address from localStorage and emit it through userEmailStore
  public getUserEmail(): Observable<string> {
    const userEmail = localStorage.getItem('userEmail');
    this.userEmailStore.next(userEmail ? userEmail : '');
    return this.userEmailStore.asObservable();
  }
}

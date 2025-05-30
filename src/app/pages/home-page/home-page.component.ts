import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserDataModel } from '../../models/user-data.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit, OnDestroy {
  public userData: UserDataModel | null = null;
  public userEmail: string | null = null;
  public getUserDataSub: Subscription | null = null;
  public userEmailSub: Subscription | null = null;
  public constructor(
    private authService: AuthService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    //get user data from API when the component is initialized
    this.getUserDataSub = this.httpService.getUserData().subscribe((data) => {
      this.userData = data;
    });
    //get userEmail which was used to login
    this.userEmailSub = this.authService.getUserEmail().subscribe((email) => {
      this.userEmail = email;
    });
  }

  ngOnDestroy(): void {
    //unsubscribe from the getUserDataSub subscription when the component is destroyed
    if (this.getUserDataSub) {
      this.getUserDataSub.unsubscribe();
    }
    //unsubscribe from the userEmailSub subscription when the component is destroyed
    if (this.userEmailSub) {
      this.userEmailSub.unsubscribe();
    }
  }

  //for the logout button click event
  public onLogout(): void {
    this.authService.logout();
  }
}

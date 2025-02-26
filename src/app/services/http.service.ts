import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../data-structure-definitions/user-data';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private URL = '../assets/API.json';

  constructor(private http: HttpClient) {}

  //return Observable with Get UserData request with API response simulation
  getUserData(): Observable<UserData> {
    return this.http.get<UserData>(this.URL);
  }
}

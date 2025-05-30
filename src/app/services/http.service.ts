import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private URL: string = '../assets/API.json';

  public constructor(private http: HttpClient) {}

  //return Observable with Get UserData request with API response simulation
  public getUserData(): Observable<UserData> {
    return this.http.get<UserData>(this.URL);
  }
}

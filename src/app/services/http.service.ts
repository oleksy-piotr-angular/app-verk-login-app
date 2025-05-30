import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserDataModel } from '../models/user-data.model';
import { UserDataDTO } from '../dto/user-data.dto';
import { UserDataMapper } from '../mappers/user-data.mapper';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private URL: string = '../assets/API.json';

  public constructor(private http: HttpClient) {}

  //return Observable with Get UserData request with API response simulation
  public getUserData(): Observable<UserDataModel> {
    return this.http
      .get<UserDataDTO>(this.URL)
      .pipe(map((responseDto) => UserDataMapper.fromDTO(responseDto)));
  }
}

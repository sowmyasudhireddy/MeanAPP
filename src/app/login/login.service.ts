import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  validateUser(username, password) {
    const requestBody = {
      username: username,
      password: password
    };
    return this.httpClient.post(`${this.url}/login`, requestBody).pipe(map(res => {
      return res;
    })).pipe(catchError((err) => {
      return throwError(err);
    }));
  }
}

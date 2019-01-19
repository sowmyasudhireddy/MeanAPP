import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  url = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {

  }

  search(searchtext) {
   return this.httpClient.post(`${this.url}/search`, { searchText: searchtext }).pipe(map(res => {
      return res;
    })).pipe(catchError((err) => {
      return throwError(err);
    }));
  }

}

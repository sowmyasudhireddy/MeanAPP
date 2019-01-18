import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  url = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {
  }

  getProducts() {
    return this.httpClient.get(`${this.url}/products`).pipe(map(res => {
      console.log(res);
      return res;
    })).pipe(catchError((err) => {
      return throwError(err);
    }));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioConvertService {
  baseUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD';

  constructor(private http: HttpClient) {}

  getValue() {
    /* let result = this.http.get(this.baseUrl);
    console.log(result); */
    return this.http.get(this.baseUrl).pipe(
      map((data) => {
        if (data === null) return throwError('null data');
        else return data;
      })
    );
  }
}

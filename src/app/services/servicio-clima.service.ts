import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioClima {

  baseUrl = 'http://api.weatherapi.com/v1/current.json?key=dfca66bbcac244cdbfc235416222409&q=';

  constructor(private http: HttpClient) { }

  getClima(ciudad:string): Observable<any> {
    /* let result = this.http.get(this.baseUrl);
    console.log(result); */
    // return this.http.get(this.baseUrl + position + "?app_id=392fd6be&app_key=93a8f3d21539eda6a180de46b4804b9d");
    return this.http.get(`${this.baseUrl}` + ciudad + `&aqi=no`);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioClima {

  // baseUrl = 'http://api.weatherunlocked.com/api/current/';
  // baseUrl = 'http://api.weatherapi.com/v1/current.json?key=dfca66bbcac244cdbfc235416222409&q=el salvador&aqi=no';
  baseUrl = 'http://api.weatherapi.com/v1/current.json?key=dfca66bbcac244cdbfc235416222409&q=';
  positionUrl = 'https://api.api-ninjas.com/v1/city?name=';

  constructor(private http: HttpClient) { }

  

  getLocation(ciudad:string) {
    /* let headers = new HttpHeaders();
    headers = headers.set('X-Api-Key', '1eO+WxdGpKkLicWDTi9MRQ==Tl40FNDnzQTGmqCV'); */
    
    this.positionUrl = `${this.positionUrl}` + ciudad;
    //console.log(this.positionUrl);
    // return this.http.get(this.positionUrl, {headers: headers});
  }

  getClima(ciudad:string): Observable<any> {
    /* let result = this.http.get(this.baseUrl);
    console.log(result); */
    // return this.http.get(this.baseUrl + position + "?app_id=392fd6be&app_key=93a8f3d21539eda6a180de46b4804b9d");
    return this.http.get(`${this.baseUrl}` + ciudad + `&aqi=no`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  response: any= {};
  constructor(private http: HttpClient) {
  }

  getCountryList(): Observable<any> {
    let result: Observable<any>;
    result = this.http.get('//localhost:8080/');
    return result;
   
  }
 
  getWeekList(selection: string): Observable<any> {
    let result: Observable<any>;   
      result = this.http.get('//localhost:8080/weeklist?country=' + selection);
      this.response = result;
    return result;
  }
}
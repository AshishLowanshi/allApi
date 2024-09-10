import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {
  private baseUrl: string = environment.baseUrl;
  private baseUrl2: string = environment.baseUrl2;

  constructor(private http: HttpClient) {

  }
  getData(urll: any): Observable<any> {
    const url = this.baseUrl + '/' + urll
    console.log(url);
    return this.http.get(url)

  }

  postData(urll: any, payload: any): Observable<any> {
    const url = this.baseUrl + '/' + urll
    console.log(url);
    return this.http.post(url, payload)
  }
  putData(urll: any, payload ): Observable<any> {
    const url = this.baseUrl + '/' + urll
    console.log(url);
    return this.http.put(url, payload)
  }
  getDataForBaseUrl2(urll: any): Observable<any> {
    const url = this.baseUrl2 + '/' + urll
    console.log(url);
    return this.http.get(url)

  }

}
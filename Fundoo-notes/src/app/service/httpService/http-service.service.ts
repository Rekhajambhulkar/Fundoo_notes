import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {
  public token: any;
  BaseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  post = (url: any, data: any) => {
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }
    console.log(this.BaseUrl)
    return this.http.post(this.BaseUrl + url, data);
  }

  encode(data: any) {
    const formBody : string[] = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
 
  reset(url: any, data: any, token: any) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': token,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    return this.http.post(this.BaseUrl + url, this.encode(data), options)
  }

  get(url: any){
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.BaseUrl + url, options )
  }
 
}

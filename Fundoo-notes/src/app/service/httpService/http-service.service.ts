import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {
  BaseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  post = (url: any, data: any) => {
    console.log(this.BaseUrl)
    return this.http.post(this.BaseUrl + url, data)
  }
}

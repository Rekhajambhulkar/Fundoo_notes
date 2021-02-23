import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpServiceService } from '../httpService/http-service.service'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService  {

  constructor(private httpService:HttpServiceService) { }

  registaration = (data: any) => {
    console.log(data);
    return this.httpService.post('user/userSignUp', data)
  }

  login = (data: any) => {
    console.log(data)
    return this.httpService.post('user/login', data)
  }
}



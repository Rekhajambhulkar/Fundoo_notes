import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpServiceService) { }

  registaration = (data: any) => {
    console.log(data);
    return this.httpService.post('user/userSignUp', data)
  }

  login = (data: any) => {
    console.log(data)
    return this.httpService.post('user/login', data)
  }

  forgotPassword = (data: any) => {
    return this.httpService.post('user/reset', data)
  }

  resetPassword = (data: any, token: any) => {
    let url = 'user/reset-password';
    console.log(data);
    return this.httpService.reset(url, data, token)
  }
}



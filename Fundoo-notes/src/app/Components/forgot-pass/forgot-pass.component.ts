import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/userService/user-service.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data: any) {
    console.log("Email Id ", data)

    this.userService.forgotPassword(data).subscribe((res) => {
      console.log("Message ", res)
    },
     (err) => {
      
      console.log("Error ", err)
    })
  }
}



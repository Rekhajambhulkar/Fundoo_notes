import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/userService/user-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {
  public password:any;
  public token: any;
  submitted = false;
  showPassword = false;

  constructor(private userService: UserServiceService, private router: Router, private activatedrouter: ActivatedRoute) { }
  ngOnInit(): void {
    this.token = this.activatedrouter.snapshot.paramMap.get('token');
  }

  changePassword(data: any) {
    console.log(data);
    let resetData = {
      newPassword: data
    }
    console.log(resetData);
    console.log(this.token);
    this.userService.resetPassword(resetData, this.token).subscribe((res) => {
      console.log("Message", res);
    }, (err) => {
      console.log("Error ", err);
    })
  }
}

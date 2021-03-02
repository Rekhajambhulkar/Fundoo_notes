import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/userService/user-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  showPassword = false;

  constructor(private snakbar: MatSnackBar, private userService: UserServiceService, private router: Router) {
  }

  ngOnInit(): void {

  }

  onClickSubmit = (data: any) => {
    //alert("Entered Email id : " + data.email);
    let logindata = {
      "email": data.email,
      "password": data.password,
      "service": "advance"
    }

    this.userService.login(logindata).subscribe((res) => {
      localStorage.setItem('token', res['id']);
        // localStorage.setItem('userId', res['userId'])
        // localStorage.setItem('firstName', res['firstName'])
        // localStorage.setItem('lastName', res['lastName'])
        // localStorage.setItem('imageUrl', res['imageUrl'])
      console.log("Login successfull ", res)

      this.openSnackbar("Login succssfull", "close");
    },
      (error) => {
        this.openSnackbar("Failed", "close");

      }
    )
  }

  openSnackbar = (message: string, action: string) => {
    this.snakbar.open(message, action, {
      duration: 2000,
    });
  }
} 

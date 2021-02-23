import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/userService/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  showPassword = false;

  constructor(private userService: UserServiceService, private router:Router) {
    if (this.userService) {
      this.router.navigate(['/']);
  }
  }

  ngOnInit(): void { 
     
  }

  onClickSubmit = (data: any) => {
    alert("Entered Email id : " + data.emailid);
    let logindata = {
      "email": data.email,
      "password": data.password,
      "service": "advance"
    }

    if (this.userService.invalid) {
      return;
  }
    console.log(data);
    this.userService.login(logindata).subscribe((res) =>{
      console.log("Sucess ", res)

    }, (err) => {
      
      console.log("Error ", err)
    })
  }
}

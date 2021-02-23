import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserServiceService} from '../../service/userService/user-service.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  submitted = false;
  
  constructor(public formBuilder: FormBuilder, private userService: UserServiceService) {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }
    )
  }

  ngOnInit(): void { };

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.signup(this.registerForm.value);

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

  signup = (formValues: any) =>{
    let data = {
      firstName: formValues.firstname,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      "service": "advance"
  }
  this.userService.registaration(data).subscribe((res) => {
   
    console.log("Sucess ", res)

  }, (err) => {
    
    console.log("Error ", err)
  })
}
}
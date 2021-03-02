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
      firstname: ['', Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('^[A-Z]+[a-zA-Z]{2,}$')],
      lastName: ['', Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('^[A-Z]+[a-zA-Z]{2,}$')],
      email: ['', [Validators.required, Validators.email, Validators.email, Validators.pattern('^([a-z]+[0-9a-z-!$%+&_.]*){3,15}@[a-z0-9]{1,8}[.]*([a-z]{2,4})*.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
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
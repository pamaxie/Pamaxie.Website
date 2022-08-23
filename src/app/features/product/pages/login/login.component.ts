/*
 login.component.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

//Core Imports
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

//Service Imports
import {AuthService} from "../../services/auth.service";
import {FormValidationService} from "../../services/form-validation.service";

@Component({
  selector: 'product-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: ['']
    });
  }

  ngOnInit(): void {
  }

  get username() {
    return this.form.controls['username'].value;
  }

  set username(value) {
    this.form.setControl('username', value)
  }

  get password() {
    return this.form.controls['password'];
  }

  @FormValidationService.ValidateForm("form")
  login() {
    const val = this.form.value;

    if (val.username && val.password) {
      this.authService.login(val.email, val.password)
      //.subscribe(
      //  () => {
      //    console.log("User is logged in");
      //    this.router.navigateByUrl('/');
      //  }
      //);
    }
  }

}

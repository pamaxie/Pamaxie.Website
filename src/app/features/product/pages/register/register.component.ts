/*
 register.component.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

//CORE IMPORTS
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

//SERVICE IMPORTS
import {AuthService} from "../../services/auth.service";
import {FormValidationService} from "../../services/form-validation.service";

@Component({
  selector: 'product-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  readPrivacy: boolean = false;
  readTOS: boolean = false;
  readCOS: boolean = false;

  currentSelectedDay: string = "Day"
  optionsDay: string[] = Array(31).fill("").map((_, i) => 1 + i).map(String);

  currentSelectedMonth: string = "Month"
  optionsMonth: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  currentSelectedYear: string = "Year"
  optionsYear: string[] = Array(200).fill("").map((_, i) => (new Date()).getFullYear() - i).map(String);

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      privacy: ['', Validators.required],
      tos: ['', Validators.required],
      cos: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get username() {
    return this.form.controls['username'].value;
  }

  get password() {
    return this.form.controls['password'];
  }

  @FormValidationService.ValidateForm("form")
  request() {
    const val = this.form.value;
    console.log(val);
  }

}

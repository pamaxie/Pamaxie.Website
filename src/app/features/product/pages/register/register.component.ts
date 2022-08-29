/*
 register.component.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

//CORE IMPORTS
import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

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
  formSubmitAttempt: boolean = false;

  optionsDay: string[] = Array(31).fill("").map((_, i) => 1 + i).map(String);
  optionsMonth: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  optionsYear: string[] = Array(200).fill("").map((_, i) => (new Date()).getFullYear() - i).map(String);

  get getData() {
    return {
      firstname: this.form.controls['username'].value,
      lastname: this.form.controls['lastname'].value,
      username: this.form.controls['username'].value,
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
      dayOfBirth: new Date(+this.form.controls['dayOfBirthYear'].value, this.optionsMonth.indexOf(this.form.controls['dayOfBirthMonth'].value), +this.form.controls['dayOfBirthDay'].value)
    }
  };

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', { validator: this.checkPasswords }],
      dayOfBirthDay: ['', Validators.required],
      dayOfBirthMonth: ['', Validators.required],
      dayOfBirthYear: ['', Validators.required],
      privacy: ['', Validators.required],
      tos: ['', Validators.required],
      cos: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    //this.form.valueChanges.subscribe(console.log);
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('repeatPassword')?.value
    return pass === confirmPass ? null : { notSame: true }
  }

  isFieldValid(field: string) {
    let formField = this.form.get(field);

    if (formField != undefined)
    {
      return (!formField.valid && formField.touched) || (formField.untouched && this.formSubmitAttempt);
    }

    return false;
  }

  onSubmit() {
    console.log(this.getData);
    this.formSubmitAttempt = true;
    if (this.form.valid) {
      console.log('Success');
    }
    console.log('failure');
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "src/app/core/services/auth.service";
import {FormValidationService} from "src/app/core/services/form-validation.service";

@Component({
  selector: 'authentication-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,24})+$')]],
      password: ['', Validators.required],
      rememberMe: ['']
    });
  }

  ngOnInit(): void {
  }

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }

  @FormValidationService.ValidateForm("form")
  login() {
    const val = this.form.value;

    if (val.email && val.password) {
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

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "src/app/core/services/auth.service";
import {FormValidationService} from "src/app/core/services/form-validation.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: ['', [Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,24})+$')]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      tos: ['', Validators.requiredTrue],
      privacy: ['', Validators.requiredTrue]
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

  get confirmPassword() {
    return this.form.controls['confirmPassword'];
  }

  get tos() {
    return this.form.controls['tos'];
  }

  get privacy() {
    return this.form.controls['privacy'];
  }


  @FormValidationService.ValidateForm("form")
  register() {
    const val = this.form.value;
    console.log(val);
    if (val.email && val.password) {
      //this.authService.register(val.email, val.password)
      //.subscribe(
      //  () => {
      //    console.log("User is registered");
      //    this.router.navigateByUrl('/');
      //  }
      //);
    }
  }
}

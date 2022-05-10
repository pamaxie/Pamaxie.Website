import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "src/app/core/services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  register() {
    const val = this.form.value;

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

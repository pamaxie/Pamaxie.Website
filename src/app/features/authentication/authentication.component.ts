import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  logo: string = 'app/assets/images/pamaxie-text-logo.png';

  constructor() {
  }

  ngOnInit(): void {
  }
}

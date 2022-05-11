import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'error-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent implements OnInit {
  image: string = 'app/assets/images/error-401-unauthorized-image.png';
  headerText: string = '401 - UNAUTHORIZED'
  bodyText: string = 'You do not have access to the page or resource you are currently trying to access. Please make sure you are logged in. If you are still unable to access this page after logging in please contact your system administrator.';
  buttonInfo = [
    {'text': 'Contact Support', 'path': '/support'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}

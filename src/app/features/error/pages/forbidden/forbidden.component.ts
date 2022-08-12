import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'error-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.scss']
})
export class ForbiddenComponent implements OnInit {
  image: string = 'app/assets/images/error-403-forbidden-image.png';
  headerText: string = '403 - FORBIDDEN'
  bodyText: string = 'You seem to be accessing a site that you should either not be accessing with your web browser (but a seperate API client) or found a bug. If you think you should be able to access this page, please contact your system administrator';
  buttonInfo: { text: string; path: string; }[] = [
    {'text': 'Contact Support', 'path': '/resources/support'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}

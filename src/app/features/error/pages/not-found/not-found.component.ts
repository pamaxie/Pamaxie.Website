import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'error-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  image: string = 'app/assets/images/error-404-image.png';
  headerText: string = '404 - NOT FOUND'
  bodyText: string = 'The web page you are currently trying to access does not exist. Please validate that the url is correct. If you can’t find any error there, please use the buttons provided below to help you out find your way back to safety.';
  buttonInfo: { text: string; path: string; }[] = [
    {'text': 'Home', "path": '/'},
    {'text': 'Contact Support', 'path': '/support'},
    {'text': 'Service Status', 'path': '/status'},
    {'text': 'Manage Your Account', 'path': '/account/manage'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}

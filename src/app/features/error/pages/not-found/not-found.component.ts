/*
 not-found.component.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'error-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  headerText: string = '404 - NOT FOUND'
  bodyText: string = 'The web page you are currently trying to access does not exist. Please validate that the url is correct. If you can’t find any error there, please use the buttons provided below to help you out find your way back to safety.';
  buttonInfo: { text: string; path: string; }[] = [
    {'text': 'Home', "path": '/'},
    {'text': 'Contact Support', 'path': '/resources/support'},
    {'text': 'Service Status', 'path': '/product/status'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}

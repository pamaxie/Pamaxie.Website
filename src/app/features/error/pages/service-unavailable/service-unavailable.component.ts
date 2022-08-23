/*
 service-unavailable.component.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'error-service-unavailable',
  templateUrl: './service-unavailable.component.html',
  styleUrls: ['./service-unavailable.component.scss']
})
export class ServiceUnavailableComponent implements OnInit {
  headerText: string = '503 - SERVICE UNAVAILABLE'
  bodyText: string = 'There seems to be an issue with our servers, please check the service status if we already noticed this error. If not feel free to reach out to us to inform us about this issue. Please remember that the service status maybe delayed by up to 10 minutes.';
  buttonInfo: { text: string; path: string; }[] = [
    {'text': 'Contact Support', 'path': '/resources/support'},
    {'text': 'Service Status', 'path': '/product/status'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}

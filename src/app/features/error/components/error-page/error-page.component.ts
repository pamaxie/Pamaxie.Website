/*
 error-page.component.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  @Input() headerText: string = '';
  @Input() bodyText: string = '';
  @Input() buttonInfo: { text: string; path: string; }[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }
}

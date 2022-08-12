/*
 image-header.component.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shared-image-header',
  templateUrl: './image-header.component.html',
  styleUrls: ['./image-header.component.scss']
})
export class ImageHeaderComponent implements OnInit {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() subTitle: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}

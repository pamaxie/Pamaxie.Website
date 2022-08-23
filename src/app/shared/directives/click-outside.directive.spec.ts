/*
 click-outside.directive.spec.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {ElementRef} from "@angular/core";
import {ClickOutsideDirective} from './click-outside.directive';

describe('ClickOutsideDirective', () => {
  it('should create an instance', () => {
    const directive = new ClickOutsideDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});

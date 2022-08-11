/*!
 form-validation.service.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";

function _validateForm(form: FormGroup): boolean {
  if (!form.valid) {
    form.markAsTouched();
    return false
  } else {
    return true
  }
}

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  constructor() {
  }

  static ValidateForm(formName: string | number): any {
    return function (target: any, key: any, descriptor: { value: Function; }) {
      const originalMethod: Function = descriptor.value;

      descriptor.value = function (this: any, ...args: any) {
        let formGroup: FormGroup = this[formName]
        if (_validateForm(formGroup)) {
          originalMethod.apply(this, args);
        }
      };

      return descriptor;
    }
  }
}

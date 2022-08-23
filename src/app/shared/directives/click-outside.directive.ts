/*
 click-outside.directive.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  @Output() public clickOutside = new EventEmitter<MouseEvent>();

  constructor(private _elementRef: ElementRef) { }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const clickedInside = this._elementRef.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}

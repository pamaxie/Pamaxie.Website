/*
 bmbf.component.spec.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BMBFComponent} from './bmbf.component';

describe('BMBFComponent', () => {
  let component: BMBFComponent;
  let fixture: ComponentFixture<BMBFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BMBFComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BMBFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/*
 too-many-requests.component.spec.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TooManyRequestsComponent} from './too-many-requests.component';

describe('TooManyRequestsComponent', () => {
  let component: TooManyRequestsComponent;
  let fixture: ComponentFixture<TooManyRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TooManyRequestsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooManyRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

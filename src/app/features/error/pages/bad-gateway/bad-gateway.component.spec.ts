/*
 bad-gateway.component.spec.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BadGatewayComponent} from './bad-gateway.component';

describe('BadGatewayComponent', () => {
  let component: BadGatewayComponent;
  let fixture: ComponentFixture<BadGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadGatewayComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

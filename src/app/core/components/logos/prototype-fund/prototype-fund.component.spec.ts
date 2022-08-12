/*
 prototype-fund.component.spec.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PrototypeFundComponent} from './prototype-fund.component';

describe('PrototypeFundComponent', () => {
  let component: PrototypeFundComponent;
  let fixture: ComponentFixture<PrototypeFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrototypeFundComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototypeFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

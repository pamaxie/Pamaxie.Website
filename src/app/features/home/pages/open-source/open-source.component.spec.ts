/*
 open-source.component.spec.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OpenSourceComponent} from './open-source.component';

describe('OpenSourceComponent', () => {
  let component: OpenSourceComponent;
  let fixture: ComponentFixture<OpenSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenSourceComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

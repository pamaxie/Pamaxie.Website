/*
 data-detection.component.spec.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DataDetectionComponent} from './data-detection.component';

describe('DataDetectionComponent', () => {
  let component: DataDetectionComponent;
  let fixture: ComponentFixture<DataDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataDetectionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

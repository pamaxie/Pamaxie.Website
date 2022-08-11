/*!
 pamaxie-w-name.component.spec.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PamaxieWNameComponent } from './pamaxie-w-name.component';

describe('PamaxieWNameComponent', () => {
  let component: PamaxieWNameComponent;
  let fixture: ComponentFixture<PamaxieWNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PamaxieWNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PamaxieWNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

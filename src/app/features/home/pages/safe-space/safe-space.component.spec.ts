import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeSpaceComponent } from './safe-space.component';

describe('SafeSpaceComponent', () => {
  let component: SafeSpaceComponent;
  let fixture: ComponentFixture<SafeSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafeSpaceComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

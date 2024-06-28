import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftconfigurationComponent } from './shiftconfiguration.component';

describe('ShiftconfigurationComponent', () => {
  let component: ShiftconfigurationComponent;
  let fixture: ComponentFixture<ShiftconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

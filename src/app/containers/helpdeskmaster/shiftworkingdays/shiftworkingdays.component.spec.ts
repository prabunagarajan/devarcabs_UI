import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftworkingdaysComponent } from './shiftworkingdays.component';

describe('ShiftworkingdaysComponent', () => {
  let component: ShiftworkingdaysComponent;
  let fixture: ComponentFixture<ShiftworkingdaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftworkingdaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftworkingdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

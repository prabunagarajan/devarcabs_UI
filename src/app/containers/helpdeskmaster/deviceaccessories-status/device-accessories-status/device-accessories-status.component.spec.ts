import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAccessoriesStatusComponent } from './device-accessories-status.component';

describe('DeviceAccessoriesStatusComponent', () => {
  let component: DeviceAccessoriesStatusComponent;
  let fixture: ComponentFixture<DeviceAccessoriesStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceAccessoriesStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceAccessoriesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

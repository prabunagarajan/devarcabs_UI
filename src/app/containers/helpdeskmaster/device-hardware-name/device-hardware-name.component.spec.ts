import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceHardwareNameComponent } from './device-hardware-name.component';

describe('DeviceHardwareNameComponent', () => {
  let component: DeviceHardwareNameComponent;
  let fixture: ComponentFixture<DeviceHardwareNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceHardwareNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceHardwareNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

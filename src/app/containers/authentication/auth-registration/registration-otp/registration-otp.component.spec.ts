import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationOtpComponent } from './registration-otp.component';

describe('RegistrationOtpComponent', () => {
  let component: RegistrationOtpComponent;
  let fixture: ComponentFixture<RegistrationOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

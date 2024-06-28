import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthChangePasswordOtpComponent } from './auth-change-password-otp.component';

describe('AuthChangePasswordOtpComponent', () => {
  let component: AuthChangePasswordOtpComponent;
  let fixture: ComponentFixture<AuthChangePasswordOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthChangePasswordOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthChangePasswordOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

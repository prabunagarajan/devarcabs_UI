import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSetPasswordComponent } from './auth-set-password.component';

describe('AuthResetPasswordComponent', () => {
  let component: AuthSetPasswordComponent;
  let fixture: ComponentFixture<AuthSetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthSetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

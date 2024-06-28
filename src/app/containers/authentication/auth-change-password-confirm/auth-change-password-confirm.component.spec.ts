import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthChangePasswordConfirmComponent } from './auth-change-password-confirm.component';

describe('AuthChangePasswordConfirmComponent', () => {
  let component: AuthChangePasswordConfirmComponent;
  let fixture: ComponentFixture<AuthChangePasswordConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthChangePasswordConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthChangePasswordConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

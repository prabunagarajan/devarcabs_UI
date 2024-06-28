import { AuthResetPasswordModule } from './auth-set-password.module';

describe('AuthResetPasswordModule', () => {
  let authResetPasswordModule: AuthResetPasswordModule;

  beforeEach(() => {
    authResetPasswordModule = new AuthResetPasswordModule();
  });

  it('should create an instance', () => {
    expect(authResetPasswordModule).toBeTruthy();
  });
});

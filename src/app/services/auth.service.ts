import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, mapTo, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { Tokens } from '@app/models/tokens';
import { AuthUser } from '@app/models/user-management';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly USER_NAME = 'USER_NAME';
  private readonly USER_ID = 'USER_ID';
  private readonly LOGIN_TIME = 'LOGIN_TIME';
  private readonly LOGIN_REMOTE_IP = 'LOGIN_REMOTE_IP';
  private readonly ENTITY_TYPE = 'EntityType';
  private readonly PROFILE_URL = 'ProfileUrl';
  private readonly IS_CUSTOMER = 'IS_CUSTOMER';
  private loggedUser: string;
  isProduction = environment.production;
  authToken = environment.authToken;
  private baseURL = environment.helpdeskURL;
  private baseURLuser = environment.registerbaseurl;
  private tokenURL = environment.tokenURL;
  private consumerKey = environment.consumerKey;
  private consumerSecret = environment.consumerSecret;
  private tokenUsername = environment.tokenUsername;
  private tokenPassword = environment.tokenPassword;
  public fileUploadFlag = false;
  private licencemanagementIPURL = environment.licencemanagementIPURL;

  private readonly USER_MENUS = 'USER_MENUS';

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    if (error instanceof Response) {
      return _throw(error.json()['error'] || 'backend server error');
    }
    // in a case server returns 400 error, which means no data found
    return of([]);
  }

  // public isAuthenticated(): boolean {
  //   const token = this.getJwtToken();    // Check whether the token is expired and return
  //   // true or false
  //   return !this.jwtHelper.isTokenExpired(token);
  // }

  login(user: { username: string; password: string }): Observable<boolean> {

    return this.http
      .post<any>(this.baseURL + apiUrls.loginUser, user)
      .pipe(
        tap((resp) => {
          const logRemoteIp = '65.0.150.210';
          const { auth: respAuth, lastLoginTime: logInTime } = resp.data;
          const {
            token: jwt,
            token: refreshToken,
            userName,
            entityType,
            userId,
            isCustomer
          } = respAuth;

          this.doLoginUser(
            user.username,
            { jwt, refreshToken },
            { userName, userId, logInTime, logRemoteIp, isCustomer },
            entityType
          );

          this.storeProfileUrl(isCustomer);
        }),
        map((ev) => ev.data.auth),
        catchError((error) => this.handleError(error))
      );
  }
  loginregister(user: { userName: string; password: string }): Observable<boolean> {

    return this.http
      .post<any>(this.baseURLuser + apiUrls.loginUser, user)
      .pipe(
        tap((resp) => {
          const logRemoteIp = '65.0.150.210';
          const { auth: respAuth, lastLoginTime: logInTime } = resp.content;
          const {
            token: jwt,
            token: refreshToken,
            userName,
            entityType,
            userId,
            isCustomer
          } = respAuth;

          this.doLoginUser(
            user.userName,
            { jwt, refreshToken },
            { userName, userId, logInTime, logRemoteIp, isCustomer },
            entityType
          );

          this.storeProfileUrl(isCustomer);
        }),
        map((ev) => ev),
        catchError((error) => this.handleError(error))
      );
  }
  getUserById(userId): Observable<any> {
    const url = this.baseURL + apiUrls.getCustomerById + '?id=' + userId;
    return this.http.get(url);
  }

  createCustomer(payload) {
    const url = this.baseURL + apiUrls.createCustomer;
    return this.http.post(url, payload).toPromise();
  }

  updateCustomer(payload) {
    const url = this.licencemanagementIPURL + apiUrls.updateCustomer;
    return this.http.post(url, payload).toPromise();
  }

  checkEmail(email) {
    const url = this.baseURL + apiUrls.mailCheck + '?emailId=' + email;
    return this.http.get(url).toPromise();
  }

  checkMobile(mobile) {
    const url = this.baseURL + apiUrls.mobileCheck + '?mobileNumber=' + mobile;
    return this.http.get(url).toPromise();
  }

  checkAadhar(aadhar) {
    const url = this.baseURL + apiUrls.aadharCheck + '?aadharNumber=' + aadhar;
    return this.http.get(url).toPromise();
  }

  checkPanNumber(panNo) {
    const url = this.baseURL + apiUrls.panNoCheck + '?panNumber=' + panNo;
    return this.http.get(url).toPromise();
  }

  checkUsername(username) {
    const url = this.baseURL + apiUrls.userNameCheck + '?userName=' + username;
    return this.http.get(url).toPromise();
  }

  generateOTP(emailId) {
    const url = this.baseURL + apiUrls.generateOTP + '?emailId=' + emailId;
    return this.http.post(url, {}).toPromise();
  }

  passwordReset(payload: { token: string; password: string, confirmPassword: string }) {
    const url = this.baseURL + apiUrls.passwordReset;
    return this.http.post(url, payload).toPromise();
  }

  logout_org() {
    const payload = {
      refreshToken: this.getRefreshToken(),
    };
    return this.http.post<any>(`authentication/logout`, payload).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError((error) => this.handleError(error))
    );
  }

  logout() {
    this.doLogoutUser();
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  isCustomer() {
    return localStorage.getItem(this.IS_CUSTOMER) === 'true' ? true : false;
  }

  getLogInTime() {
    return localStorage.getItem(this.LOGIN_TIME);
  }

  refreshToken() {
    const payload = {
      refreshToken: this.getRefreshToken(),
    };
    return this.http.post<any>(`authentication/refresh`, payload).pipe(
      tap((tokens: Tokens) => {
        this.storeJwtToken(tokens.jwt);
      })
    );
  }

  createAccessToken() {
    const payload = {
      grant_type: 'password',
      username: this.tokenUsername,
      password: this.tokenPassword,
    };

    const options = {
      headers: {
        Authorization: 'Basic ' + 'd204WmFyd0tuMlVaOHRaUXBxRENhcnpYVW53YTp2NEFPWm5GeFVINDkyYkc5VE9IT251cVJaT0Fh',
        'Access-Control-Allow-Origin': '*',
      },
    };

    return this.http.post<any>(this.tokenURL, payload, options).pipe(
      tap((tokens: Tokens) => {
        this.storeJwtToken(tokens.jwt);
      }),
      map((ev) => ev)
    );
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(
    username: string,
    tokens: Tokens,
    user: AuthUser,
    entityType: any = 'Customer'
  ) {
    this.loggedUser = username;
    this.storeTokens(tokens);
    this.storeUser(user);
    this.storeentity(entityType);
  }

  private storeentity(entity) {
    localStorage.setItem(this.ENTITY_TYPE, entity);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
    this.removeUser();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  getUserName() {
    return localStorage.getItem(this.USER_NAME);
  }

  getUserId() {
    return localStorage.getItem(this.USER_ID);
  }

  getUserMenus() {
    return localStorage.getItem(this.USER_MENUS);
  }

  getProfileUrl() {
    return localStorage.getItem(this.PROFILE_URL);
  }

  setUserMenus(menuJson) {
    return localStorage.setItem(this.USER_MENUS, JSON.stringify(menuJson));
  }

  removeUserMenus() {
    return localStorage.removeItem(this.USER_MENUS);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

  private storeUser(user: AuthUser) {
    localStorage.setItem(this.USER_NAME, user.userName);
    localStorage.setItem(this.USER_ID, user.userId);
    localStorage.setItem(this.LOGIN_TIME, user.logInTime);
    localStorage.setItem(this.LOGIN_REMOTE_IP, user.logRemoteIp);
    localStorage.setItem(this.IS_CUSTOMER, user.isCustomer);
  }

  private storeProfileUrl(isCustomer) {
    const profileUrl = isCustomer ?
      '/customer/profile' : '/supplychainmanagement/sugarmills/profile';
    localStorage.setItem(this.PROFILE_URL, profileUrl);
  }

  private removeUser() {
    localStorage.removeItem(this.USER_NAME);
    localStorage.removeItem(this.USER_ID);
    localStorage.removeItem(this.LOGIN_TIME);
    localStorage.removeItem(this.LOGIN_REMOTE_IP);
    localStorage.removeItem(this.ENTITY_TYPE);
    localStorage.removeItem(this.PROFILE_URL);
    localStorage.removeItem(this.IS_CUSTOMER);
  }
}

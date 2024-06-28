import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { throwError, Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, filter, finalize, take, switchMap } from 'rxjs/operators';
import { AuthService } from '@appServices/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private AUTH_HEADER = 'Authorization';
  private token = '';
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // if (!req.url.includes(paths.auth)) {
    //   return next.handle(req);
    // }
    // console.log('TokenInterceptor');
    // console.log('token-auth-header:', req.headers);
    if (!req.headers.has('Content-Type') && this.authService.fileUploadFlag === false) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json')
      });
    }

    if(this.authService.authToken){
      this.token = this.authService.authToken;
      req = this.addAuthenticationToken(req);
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error && error.status === 401) {
          // 401 errors are most likely going to be because we have an expired token that we need to refresh.
          if (this.refreshTokenInProgress) {
            // If refreshTokenInProgress is true, we will wait until refreshTokenSubject has a non-null value
            // which means the new token is ready and we can retry the request again
            return this.refreshTokenSubject.pipe(
              filter(result => result !== null),
              take(1),
              switchMap(() => next.handle(this.addAuthenticationToken(req)))
            );
          } else {
            this.refreshTokenInProgress = true;

            // Set the refreshTokenSubject to null so that subsequent API calls will wait until the new token has been retrieved
            this.refreshTokenSubject.next(null);

            return this.refreshAccessToken().pipe(
              switchMap((success: boolean) => {
                this.refreshTokenSubject.next(success);
                return next.handle(this.addAuthenticationToken(req));
              }),
              // When the call to refreshToken completes we reset the refreshTokenInProgress to false
              // for the next time the token needs to be refreshed
              finalize(() => (this.refreshTokenInProgress = false))
            );
          }
        } else {
          return throwError(error);
        }
      })
    );
  }

  private refreshAccessToken(): Observable<any> {
    // console.log('wso2 token');
    // if ( this.authService.isProduction ) {
    //   // console.log('create access token from server');
    //   this.authService.createAccessToken()
    //   .subscribe(
    //     (token: any) => {
    //       // console.log('authToken::', token);
    //       this.token = token;
    //     },
    //     (err: any) => {
    //       console.log('err----->>>::', err);
    //       this.token = this.authService.authToken;
    //     });
    // } else {
    //   // console.log('create access token from local');
    //   this.token = this.authService.authToken;
    // }
    this.token = this.authService.authToken;
    return of('wso2 token');
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    // console.log('addAuthenticationToken::');
    // If we do not have a token yet then we should not set the header.
    // Here we could first retrieve the token from where we store it.
    if (!this.token) {
      // console.log('token not here');
      return request;
    }
    // If you are calling an outside domain then do not add the token.
    // if (!request.url.match(/www.mydomain.com\//)) {
    //   return request;
    // }
    return request.clone({
      headers: request.headers.set(this.AUTH_HEADER, 'Bearer ' + this.token)
    });
  }
}

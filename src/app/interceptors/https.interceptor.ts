import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService, AuthService } from '@app/services';
import { Router } from '@angular/router';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
  constructor(private authenticationService:AuthService,   private alert: AlertService,    private router: Router, ){

  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('https-auth-header:', req.headers);
    // if (!req.url.includes('todos/1')) {
    //   return next.handle(req);
    // }
    // console.warn('HttpsInterceptor');

    // const httpsReq = req.clone({
    //   url: req.url.replace('http://', 'https://')
    // });

    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          // 
          
        //   if(localStorage.length>0){
        //     
        //  }
          // this.router.navigate(['authentication/signin']);
          // localStorage.removeItem('currentUser');
          // this.currentUserSubject.next(null);
          this.authenticationService.logout()
          this.alert.showWarning("Either your session has been expired or login from other place")
          this.router.navigate(['authentication/signin']);
          // location.reload(true);
          // alert("Either your session has been expired or login from other place");
          return;
       
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}

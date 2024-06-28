import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AlertService } from '../alert.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommonApiServiceService {
  public messageSource: BehaviorSubject<string> = new BehaviorSubject<string>('Initial Value');
  viewSelectedData = new EventEmitter();
  data: Observable<string> = this.messageSource.asObservable();
  constructor(private http: HttpClient, private alert: AlertService,
    private authService: AuthService,) { }
  baseURL = environment.helpdeskURL;
  LicneseBaseUrl = environment.licneseBaseUrl
  MasterBaseUrl = environment.MasterBaseUrl
  CommonBaseUrl = environment.CommonsearchUrl
  CommonSMSBaseUrl = environment.Sms
  UploadBaseUrl = environment.uploadBaseurl
  url = environment.devisionUrl
  retailUrl = environment.retailURL
  private baseURLuser = environment.registerbaseurl;
  baseURLUpload = environment.documentIPUrl;
  payementBaseurl = environment.payandreconBaseUrl
  passValue(data: any) {
    this.messageSource.next(data);
  }
  getAllPayment(geturl): Observable<any> {
    const url = this.payementBaseurl + 'payandrecon/1.0/' + geturl;
    return this.http.get(url).pipe(
      map((respo) => {
        return respo;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 500) {
          this.alert.showError('Server Is Down', 'Error');
          this.authService.logout();
        }else if(error) {
          this.alert.showError('Somethings went wrong ', 'Error');
        }
        return throwError(error);
      })
    );
  }
  postRetail(apiurl, postdata): Observable<any> {
    const url = this.retailUrl + apiurl;
    return this.http.post(url, postdata).pipe(
      map((respo) => {
        return respo;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 500) {
          this.alert.showError('Server Is Down', 'Error');
          this.authService.logout();
        }else if(error) {
          this.alert.showError('Somethings went wrong ', 'Error');
        }
        return throwError(error);
      })
    );
  }
  getAll(geturl): Observable<any> {
    const url = this.baseURL + geturl;
    return this.http.get(url).pipe(
      map((respo) => {
        return respo;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 500) {
          this.alert.showError('Server Is Down', 'Error');
          this.authService.logout();
        }else if(error) {
          this.alert.showError('Somethings went wrong ', 'Error');
        }
        return throwError(error);
      })
    );


  }
  getPut(geturl): Observable<any> {
    const url = this.baseURL + geturl;
    return this.http.put(url, '').pipe(
      map((respo) => {
        return respo;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 500) {
          this.alert.showError('Server Is Down', 'Error');
          this.authService.logout();
        }else if(error) {
          this.alert.showError('Somethings went wrong ', 'Error');
        }
        return throwError(error);
      })
    );
  }
  post(apiurl, postdata): Observable<any> {
    const url = this.baseURL + apiurl;
    return this.http.post(url, postdata).pipe(
      map((respo) => {
        return respo;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 500) {
          this.alert.showError('Server Is Down', 'Error');
          this.authService.logout();
        } else if(error) {
          this.alert.showError('Somethings went wrong ', 'Error');
        }
        return throwError(error);
      })
    );
  }
  postDownload(apiurl, postdata): any {
    const url = this.baseURL + apiurl;
    // return this.http.post(url,postdata, {responseType: 'blob'});
    return this.http.post(url, postdata).toPromise();
  }
  Put(apiurl, postdata): Observable<any> {
    const url = this.baseURL + apiurl;
    return this.http.put(url, postdata).pipe(
      map((respo) => {
        return respo;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 500) {
          this.alert.showError('Server Is Down', 'Error');
          this.authService.logout();
        }else if(error) {
          this.alert.showError('Somethings went wrong ', 'Error');
        }
        return throwError(error);
      })
    );
  }
  getLicense(geturl): Observable<any> {
    const url = this.LicneseBaseUrl + geturl;

    return this.http.post(url, '').pipe(
      map((respo) => {
        return respo;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 500) {
          this.alert.showError('Server Is Down', 'Error');
          this.authService.logout();
        }else if(error) {
          this.alert.showError('Somethings went wrong ', 'Error');
        }
        return throwError(error);
      })
    );
  }
  getentity(geturl): Observable<any> {
    const url = this.url + geturl;
    return this.http.get(url);
  }
  CommonSearchpost(apiurl, postdata): Observable<any> {
    const url = this.CommonBaseUrl + apiurl;
    return this.http.post(url, postdata).pipe(
      map((respo) => {
        return respo;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 500) {
          this.alert.showError('Server Is Down', 'Error');
          this.authService.logout();
        }else if(error) {
          this.alert.showError('Somethings went wrong ', 'Error');
        }
        return throwError(error);
      })
    );
  }

  getSmsGetAll(apiurl) {
    const url = this.CommonSMSBaseUrl + apiurl;
    return this.http.get(url).pipe(
      map((respo) => {
        return respo;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 500) {
          this.alert.showError('Server Is Down', 'Error');
          this.authService.logout();
        }else if(error) {
          this.alert.showError('Somethings went wrong ', 'Error');
        }
        return throwError(error);
      })
    );
  }

  uploadDocuments(payload): Observable<any> {
    // const url='http://65.0.150.210:3517/docManagement/api/document/uploadDocumentByVersionNoToken'
    const url = this.UploadBaseUrl + 'api/document/uploadDocumentByVersionNoToken'
    return this.http.post(url, payload)
  }
  downloadDocuments(apiurl): Observable<any> {
    // const url='http://65.0.150.210:3517/docManagement/api/document/uploadDocumentByVersionNoToken'
    const url = this.UploadBaseUrl + apiurl
    return this.http.get(url, { responseType: 'blob' });
  }
  downloadIndent(apiurl): Observable<any> {
    const url = this.baseURL +  apiurl; 
    return this.http.get(url, { responseType: 'blob' });
  }
  Post(apiurl, postdata) {
    const url = this.baseURLuser + apiurl;
    return this.http.post(url, postdata).pipe(
      map((respo) => {
        return respo;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 500) {
          this.alert.showError('Server Is Down', 'Error');
          this.authService.logout();
        }else if(error) {
          this.alert.showError('Somethings went wrong ', 'Error');
        }
        return throwError(error);
      })
    );
  }
  onViewDoc(item: any) {
    this.viewSelectedData.emit(item);
  }
}

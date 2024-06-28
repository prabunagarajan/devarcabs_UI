import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class ResetPasswordService {

    baseURL = environment.baseURLUser;

    constructor(
        private http: HttpClient
    ) { }

    resetPassowd(payload): Observable<any> {
        const url = this.baseURL + apiUrls.resetPassword;
        return this.http.post(url, payload);
    }
    verifyOtp(payload) {
        const url = this.baseURL + apiUrls.verifyOtp;
        return this.http.post(url, payload);
    }
    chanagePassword(id, obj) {
        const url = this.baseURL + apiUrls.chanagePassword;
        return this.http.post(url, obj);
    }
}

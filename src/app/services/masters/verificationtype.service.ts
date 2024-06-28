import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class VerificationTypeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getVerificationType(): Observable<any> {
        const url = this.baseURL + apiUrls.getallverificationtype;
        return this.http.get(url);
    }

    searchVerificationType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchVerification;
        return this.http.post(url, postParam);
    }

    addVerificationType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.postverificatiobtype;
        return this.http.post(url, postParam);
    }

    getVerificationTypeById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getverificationbyId + id;
        return this.http.get(url);
    }

    putVerificationType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateverificationtype;
        return this.http.put(url, postParam);
    }
}

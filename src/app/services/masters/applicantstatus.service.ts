import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class ApplicantStatusService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getApplicantStatus(): Observable<any> {
        const url = this.baseURL + apiUrls.getallapplicantstatus;
        return this.http.get(url);
    }

    searchApplicantStatus(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchApplicantStatus;
        return this.http.post(url, postParam);
    }

    addApplicantStatus(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.postapplicantstatus;
        return this.http.post(url, postParam);
    }

    getApplicantStatusById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getapplicantstatusbyid + id;
        return this.http.get(url);
    }

    putApplicantStatus(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateapplicantstatus;
        return this.http.put(url, postParam);
    }
}

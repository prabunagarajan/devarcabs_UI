import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class ApplicantTypeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getApplicantType(): Observable<any> {
        const url = this.baseURL + apiUrls.getallapplicanttype;
        return this.http.get(url);
    }

    searchApplicantType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchApplicantType;
        return this.http.post(url, postParam);
    }

    addApplicantType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.postapplicanttype;
        return this.http.post(url, postParam);
    }

    getApplicantTypeById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getapplicanttypebyid + id;
        return this.http.get(url);
    }

    putApplicantType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateapplicanttype;
        return this.http.put(url, postParam);
    }
}

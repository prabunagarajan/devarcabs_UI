import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class YearMasterService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getYear(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllYear;
        return this.http.get(url);
    }

    searchYear(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchYear;
        return this.http.post(url, postParam);
    }

    addYear(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.postYear;
        return this.http.post(url, postParam);
    }

    getYearById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getYearByid + id;
        return this.http.get(url);
    }

    putYear(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateYear;
        return this.http.put(url, postParam);
    }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class DescriptionService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    allDescription(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllDescription;
        return this.http.get(url);
    }

    searchDescription(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchDescription;
        return this.http.post(url, postParam);
    }

    postDescription(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addDescription;
        return this.http.post(url, postParam);
    }

    getDescriptionById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getDescriptionById + '?id=' + id;
        return this.http.get(url);
    }

    putDescription(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateDescription;
        return this.http.put(url, postParam);
    }
}

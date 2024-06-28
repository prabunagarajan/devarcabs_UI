import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class HeadcodeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getAllHeadcode(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllHeadcodes;
        return this.http.get(url);
    }

    searchHeadcode(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchHeadcode;
        return this.http.post(url, postParam);
    }

    addHeadcode(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addHeadcode;
        return this.http.post(url, postParam);
    }

    getHeadcodeById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getByHeadcodeId + '?id=' + id;
        return this.http.get(url);
    }

    updateHeadcode(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateHeadcode;
        return this.http.put(url, postParam);
    }
}

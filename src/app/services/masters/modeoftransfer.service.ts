import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class ModeOfTransferService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    allTransferModes(): Observable<any> {
        const url = this.baseURL + apiUrls.getalltransfermode;
        return this.http.get(url);
    }

    searchTransferMode(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchTransferMode;
        return this.http.post(url, postParam);
    }

    addTransferMode(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.posttransfermode;
        return this.http.post(url, postParam);
    }

    getTransferById(id): Observable<any> {
        const url = this.baseURL + apiUrls.gettransfermodebyid + '?id=' + id;
        return this.http.get(url);
    }

    updateTransferMode(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updatetransfermode;
        return this.http.put(url, postParam);
    }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class LabelService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getAllLabels(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllLabels;
        return this.http.get(url);
    }

    searchLabel(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchlabel;
        return this.http.post(url, postParam);
    }

    addLable(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addLable;
        return this.http.post(url, postParam);
    }

    getLabelById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getLabelById + '?id=' + id;
        return this.http.get(url);
    }

    updateLable(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateLable;
        return this.http.put(url, postParam);
    }
}

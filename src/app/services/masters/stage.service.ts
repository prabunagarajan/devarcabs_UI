import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class StageMasterService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getStage(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllstages;
        return this.http.get(url);
    }

    searchStage(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchStage;
        return this.http.post(url, postParam);
    }

    addStage(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addStage;
        return this.http.post(url, postParam);
    }

    getStageById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getStageByid + id;
        return this.http.get(url);
    }

    putStage(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateStage;
        return this.http.put(url, postParam);
    }
}

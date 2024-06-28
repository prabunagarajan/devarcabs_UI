import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class TreasuryService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    allTreasury(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllTreasury;
        return this.http.get(url);
    }

    searchTreasury(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchTreasury;
        return this.http.post(url, postParam);
    }

    addTreasury(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addTreasury;
        return this.http.post(url, postParam);
    }

    getTreasuryById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getTreasuryById + '?id=' + id;
        return this.http.get(url);
    }

    updateTreasury(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateTreasury;
        return this.http.put(url, postParam);
    }
}

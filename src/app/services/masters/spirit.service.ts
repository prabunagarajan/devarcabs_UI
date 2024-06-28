import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class SpiritService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    allSpirits(): Observable<any> {
        const url = this.baseURL + apiUrls.spiritGelAll;
        return this.http.get(url);
    }

    searchSpirit(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.spiritSearch;
        return this.http.post(url, postParam);
    }

    addSpirit(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.spiritAdd;
        return this.http.post(url, postParam);
    }

    getSpiritById(id): Observable<any> {
        const url = this.baseURL + apiUrls.spiritGetbyId + '?id=' + id;
        return this.http.get(url);
    }

    updateSpirit(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.spiritUpdate;
        return this.http.put(url, postParam);
    }
}

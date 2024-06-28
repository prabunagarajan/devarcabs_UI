import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class VillageMasterService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getAllVillages(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllActiveVillages;
        return this.http.get(url);
    }

    searchVillage(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchVillage;
        return this.http.post(url, postParam);
    }

    addVillage(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addVillage;
        return this.http.post(url, postParam);
    }

    getvillageById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getVillageById + '?id=' + id;
        return this.http.get(url);
    }

    updateVillage(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateVillage;
        return this.http.put(url, postParam);
    }

    getvillageByTalukId(id): Observable<any> {
        const url = this.baseURL + apiUrls.getVillageTalukId + '?talukid=' + id;
        return this.http.get(url);
    }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class TankTypeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getTankType(): Observable<any> {
        const url = this.baseURL + apiUrls.getalltanktype;
        return this.http.get(url);
    }

    searchTankType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchTankType;
        return this.http.post(url, postParam);
    }

    addTankType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.posttanktype;
        return this.http.post(url, postParam);
    }

    getTankTypeById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getTankTypeById + id;
        return this.http.get(url);
    }

    putTankType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updatetanktype;
        return this.http.put(url, postParam);
    }
}

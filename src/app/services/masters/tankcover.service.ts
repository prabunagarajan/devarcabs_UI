import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class TankCoverTypeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    allTankCovers(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllTankCoverType;
        return this.http.get(url);
    }

    searchTankCover(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchTankCoverType;
        return this.http.post(url, postParam);
    }

    addTankCover(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addTankCoverType;
        return this.http.post(url, postParam);
    }

    getTankCoverById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getTankCoverTypeByid + '?id=' + id;
        return this.http.get(url);
    }

    updateTankCover(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateTankCoverType;
        return this.http.put(url, postParam);
    }
}

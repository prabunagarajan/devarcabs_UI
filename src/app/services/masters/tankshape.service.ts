import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class TankShapeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getTankShape(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllTankShapes;
        return this.http.get(url);
    }

    searchTankShape(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchTankShape;
        return this.http.post(url, postParam);
    }

    addTankShape(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addTankshape;
        return this.http.post(url, postParam);
    }

    getTankShapeById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getTankShapeByid + id;
        return this.http.get(url);
    }

    putTankShape(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateTankShape;
        return this.http.put(url, postParam);
    }
}

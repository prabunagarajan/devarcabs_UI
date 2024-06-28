import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class TankMaterialService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getTankMaterial(): Observable<any> {
        const url = this.baseURL + apiUrls.getalltankmaterial;
        return this.http.get(url);
    }

    searchTankMaterial(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchTankMaterial;
        return this.http.post(url, postParam);
    }

    addTankMaterial(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addtankmaterial;
        return this.http.post(url, postParam);
    }

    getTankMaterialById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getTankMaterialById + id;
        return this.http.get(url);
    }

    putTankMaterial(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateTankMaterial;
        return this.http.put(url, postParam);
    }
}

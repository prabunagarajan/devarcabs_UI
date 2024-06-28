import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class VehicleMakeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getVehicleMake(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllVehicleMake;
        return this.http.get(url);
    }

    searchVehicleMake(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchVehiclemake;
        return this.http.post(url, postParam);
    }

    addVehicleMake(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addVehicleMake;
        return this.http.post(url, postParam);
    }

    getVehicleMakeById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getVehicleMakeById + id;
        return this.http.get(url);
    }

    putVehicleMake(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateVehicleMake;
        return this.http.put(url, postParam);
    }
}

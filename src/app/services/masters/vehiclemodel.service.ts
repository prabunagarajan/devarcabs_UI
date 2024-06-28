import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class VehicleModelService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getVehicleModel(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllVehicleModel;
        return this.http.get(url);
    }

    searchVehicleModel(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchVehicleModel;
        return this.http.post(url, postParam);
    }

    addVehicleModel(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addVehicleModel;
        return this.http.post(url, postParam);
    }

    getVehicleModelById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getVehicleModelById + id;
        return this.http.get(url);
    }

    putVehicleModel(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateVehicleModel;
        return this.http.put(url, postParam);
    }
}

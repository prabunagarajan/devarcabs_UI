import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class MeasurementService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    allMeasurement(): Observable<any> {
        const url = this.baseURL + apiUrls.getallmeasurement;
        return this.http.get(url);
    }

    searchMeasurement(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.measurementSearch;
        return this.http.post(url, postParam);
    }

    addMeasurement(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.postmeasurement;
        return this.http.post(url, postParam);
    }

    getMeasurementById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getmeasurementbyid + '?id=' + id;
        return this.http.get(url);
    }

    updateMeasurement(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updatemeasurement;
        return this.http.put(url, postParam);
    }
}

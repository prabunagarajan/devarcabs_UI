import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class ConsumptionTypeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getConsumptionType(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllConsumptionType;
        return this.http.get(url);
    }

    searchConsumptionType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchConsumptionType;
        return this.http.post(url, postParam);
    }

    addConsumptionType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addConsumType;
        return this.http.post(url, postParam);
    }

    getConsumptionTypeById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getByIdConsumptionType + id;
        return this.http.get(url);
    }

    putConsumptionType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateConsumptionType;
        return this.http.put(url, postParam);
    }
}

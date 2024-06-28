import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';
import { Country } from '@app/models/location-master';

@Injectable({
    providedIn: 'root'
})
export class CountrymasterService {

    baseURL = environment.baseURLMaster;
    baseURLIpAddr = environment.baseURLMasterIpAddr;

    constructor(
        private http: HttpClient
    ) { }

    getCountryList(payload): Observable<any> {
        const url = this.baseURLIpAddr + 'location/findCountryList';
        return this.http.post(url, payload);
    }

    addCountry(payload): Observable<any> {
        return this.http
            .post( this.baseURLIpAddr + 'location/createUpdateCountryMaster', payload)
            .pipe(
                map((res) => {
                    return res;
                })
            );
    }

    findCountryByCode(code): Observable<any> {
        return this.http
            .get( this.baseURLIpAddr + 'location/findCountryByCode?countryCode=' + code)
            .pipe(
                map((res) => {
                    return res;
                })
            );
    }

    isCountryCodeExist(code) {
        const url = this.baseURLIpAddr + 'location/isCountryCodeExist?countryCode=' + code;
        return this.http.get(url).toPromise();
    }

    getCountry(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllCountry;
        return this.http.get(url);
    }

    searchCountry(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchCountry;
        return this.http.post(url, postParam);
    }

    getCountryById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getByIdCountry + id;
        return this.http.get(url);
    }

    putCountry(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateCountry;
        return this.http.put(url, postParam);
    }
}

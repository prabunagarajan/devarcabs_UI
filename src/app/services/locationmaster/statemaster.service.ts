import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';
@Injectable({
    providedIn: 'root'
})
export class StatemasterService {

    baseURL = environment.baseURLMaster;
    baseURLIpAddr = environment.baseURLMasterIpAddr;

    constructor(
        private http: HttpClient
    ) { }

    getStateList(payload): Observable<any> {
        const url = this.baseURLIpAddr + 'location/findStateList';
        return this.http.post(url, payload);
    }

    addState(payload): Observable<any> {
        return this.http
            .post( this.baseURLIpAddr + 'location/createUpdateStateMaster', payload)
            .pipe(
                map((res) => {
                    return res;
                })
            );
    }

    findStateByCode(code): Observable<any> {
        return this.http
            .get( this.baseURLIpAddr + 'location/findStateByCode?stateCode=' + code)
            .pipe(
                map((res) => {
                    return res;
                })
            );
    }

    findStateByCountryCode(countryCode): Observable<any> {
        return this.http
            .get( this.baseURLIpAddr + 'location/findStateByCountryCode?countryCode=' + countryCode)
            .pipe(
                map((res) => {
                    return res;
                })
            );
    }

    isStateCodeExist(code) {
        const url = this.baseURLIpAddr + 'location/isStateCodeExist?stateCode=' + code;
        return this.http.get(url).toPromise();
    }

    getState(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllState;
        return this.http.get(url);
    }

    searchState(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchState;
        return this.http.post(url, postParam);
    }

    // addState(postParam): Observable<any> {
    //     const url = this.baseURL + apiUrls.addState;
    //     return this.http.post(url, postParam);
    // }

    getStateById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getByIdState + id;
        return this.http.get(url);
    }

    putState(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateState;
        return this.http.put(url, postParam);
    }
    getStateByCountryid(id) {
        console.log(id);
        const url = this.baseURL + apiUrls.getStateByCountryId + '?countryId=' + id;
        return this.http.get(url);
    }
}

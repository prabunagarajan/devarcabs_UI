import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class TalukMasterService {

    baseURL = environment.baseURLMaster;
    baseURLIpAddr = environment.baseURLMasterIpAddr;

    constructor(
        private http: HttpClient
    ) { }

    getTalukaList(payload): Observable<any> {
        const url = this.baseURLIpAddr + 'location/findTalukaList';
        return this.http.post(url, payload);
    }

    addTaluka(payload): Observable<any> {
        return this.http
            .post( this.baseURLIpAddr + 'location/createUpdateTalukaMaster', payload)
            .pipe(
                map((res) => {
                    return res;
                })
            );
    }

    findTalukaByCode(code): Observable<any> {
        return this.http
            .get( this.baseURLIpAddr + 'location/findTalukaByCode?talukaCode=' + code)
            .pipe(
                map((res) => {
                    return res;
                })
            );
    }

    findTalukaByDistrictCode(districtCode): Observable<any> {
        return this.http
            .get( this.baseURLIpAddr + 'location/findTalukaByDistrictCode?districtCode=' + districtCode)
            .pipe(
                map((res) => {
                    return res;
                })
            );
    }

    isTalukaCodeExist(code) {
        const url = this.baseURLIpAddr + 'location/isTalukaCodeExist?talukaCode=' + code;
        return this.http.get(url).toPromise();
    }

    getAllTaluk(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllTaulk;
        return this.http.get(url);
    }

    searchTaluk(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchTaulk;
        return this.http.post(url, postParam);
    }

    addTaluk(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addTaulk;
        return this.http.post(url, postParam);
    }

    gettalukById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getTaulkById + '?id=' + id;
        return this.http.get(url);
    }

    putTaulk(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.update;
        return this.http.put(url, postParam);
    }
    gettalukByDistId(id) {
        const url = this.baseURL + apiUrls.getTaulkByDistId + '?districtId=' + id;
        return this.http.get(url);
    }
}

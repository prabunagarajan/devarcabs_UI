import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class DistrictMasterService {

    baseURL = environment.baseURLMaster;
    baseURLIpAddr = environment.baseURLMasterIpAddr;

    constructor(
        private http: HttpClient
    ) { }

    getDistrictList(payload): Observable<any> {
        const url = this.baseURLIpAddr + 'location/findDistrictList';
        return this.http.post(url, payload);
    }

    addDistrict(payload): Observable<any> {
        return this.http
            .post( this.baseURLIpAddr + 'location/createUpdateDistrictMaster', payload)
            .pipe(
                map((res) => {
                    return res;
                })
            );
    }

    findDistrictByCode(code): Observable<any> {
        return this.http
            .get( this.baseURLIpAddr + 'location/findDistrictByCode?districtCode=' + code)
            .pipe(
                map((res) => {
                    return res;
                })
            );
    }

    findDistrictByStateCode(stateCode): Observable<any> {
        return this.http
            .get( this.baseURLIpAddr + 'location/findDistrictByStateCode?stateCode=' + stateCode)
            .pipe(
                map((res) => {
                    return res;
                })
            );
    }

    isDistrictCodeExist(code) {
        const url = this.baseURLIpAddr + 'location/isDistrictCodeExist?districtCode=' + code;
        return this.http.get(url).toPromise();
    }

    getAllDistrict(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllDistrict;
        return this.http.get(url);
    }

    searchDistrict(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.districtLazySearch;
        return this.http.post(url, postParam);
    }

    getdistrictById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getByIdDistrict + id;
        return this.http.get(url);
    }

    putDistrict(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateDistrict;
        return this.http.put(url, postParam);
    }
    
    getDistrictsByStateid(id) {
        const url = this.baseURL + apiUrls.getDistByStateId + '?stateId=' + id;
        return this.http.get(url);
    }
   
}

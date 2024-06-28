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
export class ZonemasterService {

    baseURL = environment.baseURLMaster;
    baseURLIpAddr = environment.baseURLMasterIpAddr;

    constructor(
        private http: HttpClient
    ) { }

    getZoneList(payload): Observable<any> {
        const url = this.baseURLIpAddr + 'location/findZoneList';
        return this.http.post(url, payload);
    }

    addZone(payload): Observable<any> {
        return this.http
            .post( this.baseURLIpAddr + 'location/createUpdateZoneMaster', payload)
            .pipe(
                map((res) => {
                    return res;
                })
            );
    }

    findZoneByCode(code): Observable<any> {
        return this.http
            .get( this.baseURLIpAddr + 'location/findZoneByCode?zoneCode=' + code)
            .pipe(
                map((res) => {
                    return res;
                })
            );
    }

    isZoneCodeExist(code) {
        const url = this.baseURLIpAddr + 'location/isZoneCodeExist?zoneCode=' + code;
        return this.http.get(url).toPromise();
    }
}

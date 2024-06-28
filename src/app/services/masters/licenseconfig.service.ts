import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';
@Injectable({
    providedIn: 'root'
})
export class LicenseConfigService {

    constructor(private http: HttpClient) { }

    baseURL = environment.devisionUrl;

    findDropdownList(data): Observable<any> {
        const url = this.baseURL + apiUrls.findConfigurationList;
        return this.http.post(url, data);
    }

    createUpdateApplicationConfiguration(data) {
        const url = this.baseURL + apiUrls.createUpdateApplicationConfiguration;
        return this.http.post(url, data);
    }

    findApplicationConfigurationByKey(entityCode, licenseTypeCode): Observable<any> {
        const param = '?entityCode=' + entityCode + '&licenseTypeCode=' + licenseTypeCode;
        const url = this.baseURL + apiUrls.findApplicationConfigurationByKey + param;
        return this.http.get(url);
    }

    isConfigurationExist(entityCode, licenseTypeCode): any {
        const param = '?entityCode=' + entityCode + '&licenseTypeCode=' + licenseTypeCode;
        const url = this.baseURL + apiUrls.isConfigurationExist + param;
        return this.http.get(url, {}).toPromise();
    }

    checkdropdownkey(key): Observable<any> {
        const url = this.baseURL + apiUrls.checkDropdownKey + '?dropDownKey=' + key;
        return this.http.get(url);
    }

    getDropdownByKey(key) {
        const url = this.baseURL + apiUrls.getDropDownBykey + '?dropDownKey=' + key;
        return this.http.get(url);
    }

    getapprovallogs(id) {
        const url = this.baseURL + apiUrls.getapprovalloags + id;
        return this.http.get(url);
    }
}

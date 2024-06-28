import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';
@Injectable({
    providedIn: 'root'
})
export class DropdownConfigService {

    constructor(private http: HttpClient) { }

    baseURL = environment.devisionUrl;
    addmastervalues(data): Observable<any> {
        const url = this.baseURL + apiUrls.createupdatedropdown;
        return this.http.post(url, data);
    }

    findDropdownList(data): Observable<any> {
        const url = this.baseURL + apiUrls.findDropdownList;
        return this.http.post(url, data);
    }

    checkdropdownkey(key): Observable<any> {
        const url = this.baseURL + apiUrls.checkDropdownKey + '?dropDownKey=' + key;
        return this.http.get(url);
    }

    getDropdownByKey(key, addi?): Observable<any> {
        let url = this.baseURL + apiUrls.getDropDownBykey + '?dropDownKey=' + key;
        url += (addi) ? '&additionalFilter2=' + addi : '';
        return this.http.get(url);
    }

    findDropDownMaster(key): Observable<any> {
        const url = this.baseURL + apiUrls.findDropDownMaster + '?dropDownKey=' + key;
        return this.http.get(url);
    }

    findDropDownMasterOnMaster(key): Observable<any> {
        const url = this.baseURL + apiUrls.findDropDownMasterOnMaster + '?dropDownKey=' + key;
        return this.http.get(url);
    }

    getapprovallogs(id): Observable<any> {
        const url = this.baseURL + apiUrls.getapprovalloags + id;
        return this.http.get(url);
    }

    findDependentMasterList(payload): Observable<any> {
        const url = `${this.baseURL}${apiUrls.findDependentMasterList}`;
        return this.http.post(url, payload);
    }

    findDependentValuesByFilterCodeAndSubCode(filterCode, filterSubCode): Observable<any> {
        const url = `${this.baseURL}${apiUrls.findDependentValuesByFilterCodeAndSubCode}?filterCode=${filterCode}&filterSubCode=${filterSubCode}`;
        return this.http.get(url);
    }

    findDependentValuesMasterOnMaster(filterCode, filterSubCode): Observable<any> {
        const url = `${this.baseURL}${apiUrls.findDependentValuesMasterOnMaster}?filterCode=${filterCode}&filterSubCode=${filterSubCode}`;
        return this.http.get(url);
    }

    findActiveDropDownList(): Observable<any> {
        const url = `${this.baseURL}${apiUrls.findActiveDropDownList}`;
        return this.http.get(url);
    }

    findActiveDropDownChildList(dropDownKey): Observable<any> {
        const url = `${this.baseURL}${apiUrls.findActiveDropDownChildList}?dropDownKey=${dropDownKey}`;
        return this.http.get(url);
    }

    isFilterKeyExist(filterCode, filterSubCode): Observable<any> {
        const url = `${this.baseURL}${apiUrls.isFilterKeyExist}?filterCode=${filterCode}&filterSubCode=${filterSubCode}`;
        return this.http.get(url);
    }

    isFilterKeyExistPromise(filterCode, filterSubCode): any {
        const url = `${this.baseURL}${apiUrls.isFilterKeyExist}?filterCode=${filterCode}&filterSubCode=${filterSubCode}`;
        return this.http.get(url).toPromise();
    }

    createUpdateDependentValues(payload): Observable<any> {
        const url = `${this.baseURL}${apiUrls.createUpdateDependentValues}`;
        return this.http.post(url, payload);
    }
    getallbrands(): Observable<any> {
        const url = this.baseURL + apiUrls.getallBrands;
        return this.http.get(url);
    }
}

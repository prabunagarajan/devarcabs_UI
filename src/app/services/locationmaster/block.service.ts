import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class BlockMasterService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getAllBlocks(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllBlocks;
        return this.http.get(url);
    }

    searchblock(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchBlock;
        return this.http.post(url, postParam);
    }

    addBlock(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addBlock;
        return this.http.post(url, postParam);
    }

    getblockById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getBlockById + '?id=' + id;
        return this.http.get(url);
    }

    updateblock(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateBlock;
        return this.http.put(url, postParam);
    }
    gettalukByDistId(id) {
        const url = this.baseURL + apiUrls.getTaulkByDistId + '?districtId=' + id;
        return this.http.get(url);
    }
}

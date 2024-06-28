import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class DocumentTypeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getAllDocuments(): Observable<any> {
        const url = this.baseURL + apiUrls.getAlldoc;
        return this.http.get(url);
    }

    searchDocumentType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchDocumentType;
        return this.http.post(url, postParam);
    }

    addDocument(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addDoc;
        return this.http.post(url, postParam);
    }

    getdocById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getDocbyid + '?id=' + id;
        return this.http.get(url);
    }

    updateDocument(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updatedoc;
        return this.http.put(url, postParam);
    }
}

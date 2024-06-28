import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class DocumentUploadService {

    baseURL = environment.documentIPUrl;

    constructor(
        private http: HttpClient
    ) { }

    // Category Api's
    uploadDocuments(payload) {
        const url = this.baseURL + apiUrls.uploadDocuments;
        return this.http.post(url, payload).toPromise();
    }

    // Category Api's
    uploadDocumentsNoToken(payload) {
        const url = this.baseURL + apiUrls.uploadDocumentsNoToken;
        return this.http.post(url, payload).toPromise();
    }

    downloadDocument(uuid, fileName): any {
        const url = this.baseURL + apiUrls.downloadDocument + '?uuid=' + uuid + '&fileName=' + fileName;
        return this.http.get(url, { responseType: 'blob' });
    }

}

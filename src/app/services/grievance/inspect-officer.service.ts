import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class InspectOfficerService {

  baseURL = 'https://devapigateway.upexciseonline.co/licensemanagement/v1.0.0/';

  constructor(private http: HttpClient) {
  }

  getLicenseDetails(): Observable<any> {
    const url = this.baseURL + "license/findLicenseApplication?applicationNumber=WL66564723";
    return this.http.get(url);
  }


}

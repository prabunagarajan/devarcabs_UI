import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "@appEnv/environment";
import { apiUrls } from "@appEnv/apiurls";

@Injectable({
  providedIn: 'root'
})
export class DeviceRegistrationService {

  constructor(private http: HttpClient) { }

  baseURL = environment.helpdeskURL;

  getDeviceRegistrtionSearch(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.deviceRegistrationList;
    return this.http.post(url, postdata);
  }
  getDeviceRegistrtionlist(): Observable<any> {
    const url = this.baseURL + apiUrls.deviceRegistrationList;
    return this.http.get(url);
  }
  getDeviceRegistrationById(id):Observable<any>{
    const url = this.baseURL + apiUrls.getDeviceRegistrationById + id;
    return this.http.get(url);
  }
  checkDeviceStatus(deviceNumber):Observable<any>{
    const url = this.baseURL + apiUrls.checkDeviceStatus + deviceNumber;
    return this.http.get(url);
  }

  approveOrRejectDeviceRegistration(postData):Observable<any>{
    const url = this.baseURL + apiUrls.approveOrRejectDeviceRegistration;
    return this.http.put(url,postData);
  }

  getDeviceStatusDropdown():Observable<any>{
    const url = this.baseURL + apiUrls.getDeviceStatusDropdown;
    return this.http.get(url);
  }

  deAssociate(deviceNo,):Observable<any>{
    const url = this.baseURL + apiUrls.deAssociate;
    return this.http.post(url+deviceNo,null);
  }
  
}


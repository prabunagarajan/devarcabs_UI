import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.helpdeskURL;


  getAllgroup(helpDesRoleRequired = true, fetchAdminRole = true): Observable<any> {
    const url = this.baseURL + apiUrls.assigngroup + '?helpDeskRoleRequired=' + helpDesRoleRequired + '&defaultRoleRequired=' + fetchAdminRole;
    return this.http.get(url);
  }
  //rule name based search filter
  getfiltergname(name): Observable<any> {
    const url = this.baseURL + apiUrls.filtergetgname +"?groupName="+ name;
    return this.http.get(url);
  }
  getByIdgroup(id): Observable<any> {
    const url = this.baseURL + apiUrls.getByIdgroupList + id;
    return this.http.get(url);
  }
  getallusergroup(id): Observable<any> {
    const url = this.baseURL + apiUrls.getallusergroup + id;
    return this.http.get(url);
  }
  addgroup(data: any): Observable<any> {
    const url = this.baseURL + apiUrls.addhelpdeskgroup;
    return this.http.post(url, data);
  }
}

import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "@appEnv/environment";
import { apiUrls } from "@appEnv/apiurls";

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  constructor(private http: HttpClient) {}

  baseURL = environment.helpdeskURL;

  getAllActionTakenList(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllActionTakenList;
    return this.http.get(url);
  }
  getByIdActiontakenList(id): Observable<any> {
    const url = this.baseURL + apiUrls.actiontakenlistgetbyId + id;
    return this.http.get(url);
  }
  createaction(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.createaction;
    return this.http.post(url, postdata);
  }

  generateHash(payload){
    const url = this.baseURL + apiUrls.generateHash;
    return this.http.post(url, payload);
  }
}

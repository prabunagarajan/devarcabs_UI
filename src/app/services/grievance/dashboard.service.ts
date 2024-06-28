import { Injectable } from "@angular/core";
import * as Highcharts from "highcharts";
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';
import { element } from "protractor";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseURL = environment.helpdeskURL;

  constructor(private http: HttpClient) {
  }

  getTilesAndPiechartData(): Observable<any> {
    const url = this.baseURL + apiUrls.getPieChartForGrievance;
    return this.http.get(url);
  }

  getBarChart(): Observable<any> {
    const url = this.baseURL + apiUrls.getBarChartForGrievance;
    return this.http.get(url);
  }

  getTilesAndPiechartDataForInspect(req): Observable<any> {
    const url = this.baseURL + apiUrls.getPieChartForInspect;
    return this.http.post(url, req);
  }

  getBarChartForInspect(req): Observable<any> {
    const url = this.baseURL + apiUrls.getBarChartForInspect;
    return this.http.post(url, req);
  }

}

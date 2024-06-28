import { Injectable } from "@angular/core";
import * as Highcharts from "highcharts";
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';
import { element } from "protractor";

@Injectable()
export class HighchartsService {

    baseURL = environment.helpdeskURL;

    constructor(private http: HttpClient) {
    }

    getTilesAndPiechartData(): Observable<any> {
        const url = this.baseURL + apiUrls.getPiechart;
        return this.http.get(url);
    }
    getTilesAndPiechartDataDeptRole(): Observable<any> {
        const url = this.baseURL + apiUrls.getPiechartDept;
        return this.http.get(url);
    }
    getBarChart(): Observable<any> {
        const url = this.baseURL + apiUrls.getBarChart;
        return this.http.get(url);
    }
    getBarChartDept(): Observable<any> {
        const url = this.baseURL + apiUrls.getBarChartDept;
        return this.http.get(url);
    }

}

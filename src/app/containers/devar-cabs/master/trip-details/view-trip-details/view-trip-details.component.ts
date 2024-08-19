import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriverDetailsService } from '@app/services/dever-cabs/driver-details.service';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-trip-details',
  templateUrl: './view-trip-details.component.html',
  styleUrls: ['./view-trip-details.component.scss']
})
export class ViewTripDetailsComponent implements OnInit {
  baseUrl = environment.helpdeskURL;
  viewDetails: any;
  constructor(
    private route: ActivatedRoute,
    private Service: DriverDetailsService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.viewTripDetails(params['id']);
      }
    });
  }

  getTripDetails(viewId): Observable<any> {
    const url = this.baseUrl + 'tripDetails/getById/' + viewId;
    return this.http.get(url, viewId);
  }
  viewTripDetails(viewId) {

    this.getTripDetails(viewId).subscribe(viewTripDetailsResponse => {
      if (viewTripDetailsResponse.errorCode == 200 && viewTripDetailsResponse.status == "s") {
        this.viewDetails = viewTripDetailsResponse.data;
      }
    })
  }
}

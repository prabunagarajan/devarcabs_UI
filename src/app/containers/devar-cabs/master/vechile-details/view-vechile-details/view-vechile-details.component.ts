import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriverDetailsService } from '@app/services/dever-cabs/driver-details.service';

@Component({
  selector: 'app-view-vechile-details',
  templateUrl: './view-vechile-details.component.html',
  styleUrls: ['./view-vechile-details.component.scss']
})
export class ViewVechileDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private Service: DriverDetailsService
  ) { }

  ngOnInit() {
  }
}

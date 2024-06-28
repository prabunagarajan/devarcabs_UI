import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriverDetailsService } from '@app/services/dever-cabs/driver-details.service';

@Component({
  selector: 'app-view-driver-details',
  templateUrl: './view-driver-details.component.html',
  styleUrls: ['./view-driver-details.component.scss']
})
export class ViewDriverDetailsComponent implements OnInit {

  editId; getticketbyiddet: any;
  constructor(private route: ActivatedRoute, private Service: DriverDetailsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
      }
    });
    this.getticketbyid();
  }
  getticketbyid() {
    this.Service.driverDetailsGetById(this.editId).subscribe((responceData: any) => {
      this.getticketbyiddet = (responceData.status === 's') ? responceData.data : [];
    });
  }

}

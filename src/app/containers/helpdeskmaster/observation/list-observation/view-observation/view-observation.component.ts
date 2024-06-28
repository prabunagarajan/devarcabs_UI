import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-view-observation',
  templateUrl: './view-observation.component.html',
  styleUrls: ['./view-observation.component.scss']
})
export class ViewObservationComponent implements OnInit {

  editId: any;
  obj: any = '';

  constructor(private route: ActivatedRoute, private Service: CommonApiServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
  }

  setData(editId: any) {
    this.Service.getAll(apiUrls.getByIdsiteobservation + editId).subscribe((resp: any) => {
      this.obj = resp.data
    });

  }

}

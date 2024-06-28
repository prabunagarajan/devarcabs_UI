import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { DistrictService } from '@app/services/helpdesk/district.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  obj: any;
  editId='';
  constructor(private route: ActivatedRoute, private Service:CommonApiServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.getDistrictById();
      }
    });
  }

  getDistrictById() {
    this.Service.getAll(apiUrls.getIssueReportById + this.editId).subscribe((resp: any) => {
      if(resp.status=='s' && resp.errorCode == 200){
        this.obj = resp.data[0];
      }
    })
  }

}

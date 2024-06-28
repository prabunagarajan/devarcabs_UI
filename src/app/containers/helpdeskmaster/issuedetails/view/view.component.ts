import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { IssueService } from '@app/services/helpdesk/issueservice';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  editId;obj;
  constructor(private route: ActivatedRoute, private Service: CommonApiServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId)
      }
    });
    // this.getticketstatus();
  }
  // getticketstatus() {
  //   this.Service.getallissuesbyid(this.editId).subscribe(responceData => {
  //     this.obj = responceData.data;
  //   })
  // }
  setData(editId: any) {
    this.Service.getAll(apiUrls.getbyIdIssuedetails + editId).subscribe(responceData => {
      console.log(responceData);
 
      this.obj = responceData.data;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { GroupService } from '@app/services/helpdesk/group.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  editId: any='';
  registrationobj: any='';

  constructor(private route: ActivatedRoute, private Service:CommonApiServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
  }
  setData(editId: string) {
    this.Service.getAll(apiUrls.getByIdrole +  editId).subscribe(responceData => {
      this.registrationobj=responceData.data
    })
  }
}

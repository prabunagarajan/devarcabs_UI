import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActualProbelmService } from '@app/services/helpdesk/actionprobelms.service';
import { ActionTakenService } from '@app/services/helpdesk/actiontaken.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  editId: any;
  obj: any='';

  constructor(private route: ActivatedRoute, private Service:CommonApiServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("sdaadsa",params);
      
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
  }

  setData(editId: any) {
  
    this.Service.getAll(apiUrls.issueFromgetById + editId).subscribe((resp: any) => {
 this.obj=resp.data
    });
 
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  registrationobj: any;
  id: any;

  constructor(private route: ActivatedRoute, private Service:CommonApiServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.setData(this.id);
      }
    });
  }

  setData(id) {
    this.Service.getAll(apiUrls.getPriorityById + id).subscribe(responceData => {
     
    this.registrationobj=responceData.data
    })
  }
}

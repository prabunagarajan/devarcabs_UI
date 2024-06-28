import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiUrls } from '@appEnv/apiurls';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: any;
  obj: any;

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
    this.Service.getAll(apiUrls.getbyidAsset+id).subscribe(responceData => {
      console.log(responceData);
      this.obj = responceData.data;
    })
  }

}

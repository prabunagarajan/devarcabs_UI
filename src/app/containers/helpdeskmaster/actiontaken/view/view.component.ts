import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActualProbelmService } from '@app/services/helpdesk/actionprobelms.service';
import { ActionTakenService } from '@app/services/helpdesk/actiontaken.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  id: any;
  obj: any;

  constructor(private route: ActivatedRoute, private Service:ActionTakenService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.setData(this.id);
      }
    });
  }
  setData(id) {
    this.Service.getByIdActiontakenList(id).subscribe(responceData => {
      console.log(responceData);
      this.obj = responceData.data;
    })
  }

}

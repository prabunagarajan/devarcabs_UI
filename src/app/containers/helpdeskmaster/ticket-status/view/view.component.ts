import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  TicketStatusService } from '@app/services/helpdesk/ticket-status.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  editId: any;
  obj: any;

  constructor(private route: ActivatedRoute, private Service:TicketStatusService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
  }
  setData(id) {
    this.Service.getTicketStatusById(id).subscribe(responceData => {
      this.obj = responceData.data;
    })
  }
}

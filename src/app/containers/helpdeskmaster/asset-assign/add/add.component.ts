import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionTakenService } from '@app/services/helpdesk/actiontaken.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  editId: any;
  obj: any;

  constructor(private route: ActivatedRoute, private Service:ActionTakenService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
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

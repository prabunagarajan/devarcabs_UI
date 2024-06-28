import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActualProbelmService } from '@app/services/helpdesk/actionprobelms.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  registrationobj: any;
  editId: any;

  constructor(private route: ActivatedRoute, private Service:ActualProbelmService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
  }
  setData(id) {
    this.Service.getByIdActualProbelmList(id).subscribe(responceData => {
      console.log(responceData);
      this.registrationobj = responceData.data;
    })
  }

 
}

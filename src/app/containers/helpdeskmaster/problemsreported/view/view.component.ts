import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProbelmReportedService } from '@app/services/helpdesk/probelmreported.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  id: any;
  registrationobj: any;

  constructor(private route: ActivatedRoute, private Service:ProbelmReportedService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.setData(this.id);
      }
    });
  }
  setData(id) {
    this.Service.getByIdProbelmReportedList(id).subscribe(responceData => {
      console.log(responceData);
      this.registrationobj = responceData.data;
    })
  }
}

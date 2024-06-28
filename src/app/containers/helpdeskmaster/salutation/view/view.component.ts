import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiUrls } from '@appEnv/apiurls';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  id: any;
  public salutationData: any;
  constructor(
    private route: ActivatedRoute,
    private service: CommonApiServiceService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('Id');
    this.loadSalutation(this.id);
  }

  loadSalutation(salutationId) {
    this.service.getAll(`${apiUrls.getSalutationById}${salutationId}`).subscribe(response => {
      this.salutationData = response.data;
    })
  }

}

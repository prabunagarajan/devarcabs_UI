import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-shop-view',
  templateUrl: './shop-view.component.html',
  styleUrls: ['./shop-view.component.scss']
})
export class ShopViewComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Service: CommonApiServiceService) { }
  editId
  registrationobj : any
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
  }
  setData(editId) {
    if (editId != '' && editId != undefined) {

      this.Service.getAll(apiUrls.shopcodemasterGetBY + editId).subscribe((resp: any) => {
        this.registrationobj = resp.data

      });
    }
  }
}

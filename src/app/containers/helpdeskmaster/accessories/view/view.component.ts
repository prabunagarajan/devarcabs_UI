import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccessoriesService } from '@app/services/helpdesk/accessories.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  editId: any;
  assetaccessorieslist:any;
  constructor(private route: ActivatedRoute, private service: AccessoriesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });

    if (this.createObj) {
      this.setData(this.editId);
    }

  }

  setData(editId: any) {
    this.service.getassetaccessoriesbyId(editId).subscribe((resp: any) => {
      console.log(resp.data);
      this.assetaccessorieslist =(resp.status === 's') ? resp.data : [];

    });
  }


}

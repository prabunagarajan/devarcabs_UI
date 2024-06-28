import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssetbrandService } from '@app/services/helpdesk/assetbrand.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  registrationobj: any;
  id: any;

  constructor(private route: ActivatedRoute,private service:AssetbrandService) { }

 
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.setData(this.id);
      }
    });
  }
  setData(id) {
    this.service.getByIdAssetBrand(id).subscribe(responseData => {
      console.log(responseData);
      this.registrationobj = responseData.data;
    })
  }

}

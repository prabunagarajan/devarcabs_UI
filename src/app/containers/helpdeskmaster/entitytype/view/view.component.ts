import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EntityTypeService } from '@app/services/helpdesk/entity-type.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  obj: any='';
  editId='';
  constructor(private route: ActivatedRoute, private Service:EntityTypeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.getEntityById(params.id);
      }
    });
  }

 

  getEntityById(id) {
    this.Service.getEntityTypeById(id).subscribe(responceData => {
      if(responceData.status=='s' && responceData.errorCode == 200){
        this.obj = responceData.data[0];
      }
    })
  }

}

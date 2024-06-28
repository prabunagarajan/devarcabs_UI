import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '@app/services/helpdesk/category.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  editId; getticketbyiddet: any;
  constructor(private route: ActivatedRoute, private Service: CategoryService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
      }
    });
    this.getticketbyid();
  }
  getticketbyid() {
    this.Service.getByIdCategoryList(this.editId).subscribe((responceData: any) => {
      this.getticketbyiddet = (responceData.status === 's') ? responceData.data : [];
    });
  }
}

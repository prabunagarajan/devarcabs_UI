import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '@app/services/helpdesk/department.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  departmentObj={
    departmentCode: '',
    department: '',
    status: '',
    created_by: '',
    created_date: '',
    modified_by: '',
    modified_date: ''
  };
  editId='';
  constructor(private route: ActivatedRoute, private Service:DepartmentService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.getDepartmentById(params.id);
      }
    });
  }

  getDepartmentById(id) {
    this.Service.getByIdDeptList(id).subscribe(responceData => {
      if(responceData.status=='s' && responceData.errorCode == 200){
        this.departmentObj = responceData.data;
      }
    })
  }

}

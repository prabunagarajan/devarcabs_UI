import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit {
  createObj: any = {
    categoryId: '',
    subCategoryId: '',
    status:''
  }

  statusOptions = [
    {label: 'Active', value: true },
    {label: 'Inactive', value: false }
  ];

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  currentSortHeadActive = 'createdDate';
  currentSortDirection = 'desc';
  tablePageIndex = 0;
  itemsPerPage = 5;

  noTableData = 'No Records Found';
  totalRecords = 0;
  tableData = [];

  displayColumns = [
    'position',
    'designationName',
    'createdDate',
    'createdBy',
    'modifiedDate',
    'modifiedBy',
    'status',
    'action'
  ];

  list:any;

  constructor(
    private service: CommonApiServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getDesignationList();
  }

  getDesignationList() {
    this.service.getAll(apiUrls.getAllDesignations).subscribe((res: any) => {
      this.setResponseData(res);
    }, error => {
      this.dataSource = new MatTableDataSource<any>();
      this.noTableData = 'No Records Found';
    });
  }

  searchSalutation() {
    const searchParam = {
      "filters": {
        "categoryId": this.createObj.categoryId,
        "subCategoryId": this.createObj.subCategoryId,
        "status": this.createObj.status
      },
      "pageNo": 0,
      "paginationSize": 5,
      "sortField": "modifiedDate",
      "sortOrder": "DESC",
    };

    this.service.post(apiUrls.searchSalutation, searchParam).subscribe(response => {
      this.setResponseData(response);
    });
  }

  setResponseData(res) {
    if (res && res !== undefined && res !== null) {
      if (res.status == "s" && res.errorCode == 200) {
        this.tableData = res.data;
        this.totalRecords = res.data.length;
        this.dataSource = new MatTableDataSource<any>(this.tableData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // this.dataChange.next(this.tableData);
      } else {
        this.noTableData = 'No Records Found';
        this.dataSource = new MatTableDataSource<any>();
        // this.dataChange.next(data);
      }
    } else {
      this.noTableData = 'No Records Found';
      this.dataSource = new MatTableDataSource<any>();
      // this.dataChange.next(data);
    }
  }

  navigateView(data) {
    this.router.navigate([`/helpdeskmaster/designation/view/${data.id}`]);
  }
  navigateEdit(data) {
    this.router.navigate([`/helpdeskmaster/designation/edit/${data.id}`]);
  }

}

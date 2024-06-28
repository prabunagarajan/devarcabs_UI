import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ActualProbelmService } from '@app/services/helpdesk/actionprobelms.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { MatSort, MatSortable, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { apiUrls } from '@appEnv/apiurls';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { DataService } from '@app/services/helpdesk/data.service';
@Component({
  selector: 'app-supplier-master',
  templateUrl: './supplier-master.component.html',
  styleUrls: ['./supplier-master.component.scss']
})
export class SupplierMasterComponent implements OnInit {
  list: any;
  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  formSubmitted = false;
  searchForm: FormGroup;
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  currentSortHeadActive = 'createdDate';
  currentSortDirection = 'desc';
  tablePageIndex = 0;
  itemsPerPage = 10;

  noTableData = 'No Records Found';
  totalRecords = 0;
  tableData = [];

  ticketListDisplayedColumns = [
    'position',
    'supplier',
    'supplierName',
    'address',
    'mobileNo',
    'email',
    // 'createdBy',
    // 'createdDate',
    // 'modifiedBy',
    // 'modifiedDate',
    'status',
    'action'
  ]


  searchmethod: boolean = false;
  searchList: any = {
    supplier: '',
    supplierName: '',
    status: ''
  }
  constructor(private router: Router,
    private fb: FormBuilder, private service: CommonApiServiceService, private dataService: DataService,) {

  }

  ngOnInit() {
    this.getAllproblems();
  }
  onPageChange(event: PageEvent) {
    if (this.searchmethod) {
      this.tablePageIndexsearch = event.pageIndex;
      this.itemsPerPagesearch = event.pageSize;
      this.search();
    } else {
      this.tablePageIndex = event.pageIndex;
      this.itemsPerPage = event.pageSize;
      this.getAllproblems();
    }
  }
  get f() { return this.searchForm.controls; }

  getAllproblems() {
    const postdata = {
      "filters": {
        "supplier": "",
        "supplierName": "",
        "mobileNumber": "",
        "emailId": "",
        "active": "",
        "createdBy":   localStorage.getItem('userId')
      },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "createdDate",
      "sortOrder": "DESC"
    }
    this.service.post(apiUrls.suplierList, postdata).subscribe((res: any) => {
      if (res && res !== undefined && res !== null) {
        this.searchmethod = false
        if (res.status == "s" && res.errorCode == 200) {
          this.tableData = res.data.contents;
          this.totalRecords = res.data.totalElements;
          this.dataSource = new MatTableDataSource<any>(this.tableData);
          this.dataSource.sort = this.sort;

        } else {
          this.noTableData = 'No Records Found';
          this.dataSource = new MatTableDataSource<any>();

        }
      } else {
        this.noTableData = 'No Records Found';
        this.dataSource = new MatTableDataSource<any>();

      }
    }, error => {
      this.dataSource = new MatTableDataSource<any>();
      this.noTableData = 'No Records Found';
    });

  }
  clearfilter() {
  
    this.searchList = {
      supplier: '',
      supplierName: '',
      status: ''
    }
    this.searchmethod = false
    this.tablePageIndex = 0,
      this.itemsPerPage = 10
    this.tablePageIndexsearch = 0;
    this.itemsPerPagesearch = 10;
    this.getAllproblems();
  }
  search() {
    const postdata = {
      "filters": {
        "supplier": this.searchList.supplier,
        "supplierName":this.searchList.supplierName,
        "mobileNumber": "",
        "emailId": "",
        "active":this.searchList.status,
        "createdBy":   localStorage.getItem('userId')
      },
      "pageNo": this.tablePageIndexsearch,
      "paginationSize": this.itemsPerPagesearch,
      "sortField": "createdDate",
      "sortOrder": "DESC"
    }
    this.service.post(apiUrls.suplierList, postdata).subscribe((res: any) => {
      if (res && res !== undefined && res !== null) {
        if (res.status == "s" && res.errorCode == 200) {
          this.searchmethod = true
          this.tableData = res.data.contents;
          this.totalRecords = res.data.totalElements;
          this.dataSource = new MatTableDataSource<any>(this.tableData);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        } else {
          this.noTableData = 'No Records Found';
          this.dataSource = new MatTableDataSource<any>();

        }
      } else {
        this.noTableData = 'No Records Found';
        this.dataSource = new MatTableDataSource<any>();

      }
    }, error => {
      this.dataSource = new MatTableDataSource<any>();
      this.noTableData = 'No Records Found';
    });

  }



  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/supplier-master/view', id]);
  }

  navigateEdit(id) {
    this.router.navigate(['/helpdeskmaster/supplier-master/edit', id]);
  }

  ListHeader = [
    'Supplier',
    'Supplier Name',
    'Address',
    'Mobile Number',
    'Email Id',
    'Status',

  ];

  ListTableKeys = [
    {
      data: 'supplier',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'supplierName',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'address',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'mobileNumber',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'emailId',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    // {
    //   data: 'createdBy',
    //   "className": "Capitalise",
    //   render: function (data, type, row) {
    //     return (data ? data : '');
    //   }
    // },
    // {
    //   data: 'createdDate',
    //   render: function (data, type, row) {
    //     return (data ? data : '');
    //   }
    // },
    // {
    //   data: 'modifiedBy',
    //   render: function (data, type, row) {
    //     return (data ? data : '');
    //   }
    // },
    // {
    //   data: 'modifiedDate',
    //   render: function (data, type, row) {
    //     return (data ? data : '');
    //   }
    // },
     {
      data: 'active',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
  ]
  export() {
    const postdata = {
      "filters": {
        "supplier": "",
        "supplierName": "",
        "mobileNumber": "",
        "emailId": "",
        "active": "",
        "createdBy": 2
      },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "createdDate",
      "sortOrder": "DESC"
    }
    this.service.post(apiUrls.suplierList, postdata).subscribe((resp: any) => {
      if (resp.status == 's') {
        let list = resp.data.contents
        list.forEach(element => {
          if (element.modifiedDate) {
            element.modifiedDate = moment(element.modifiedDate).format('MMM DD,yyyy HH:MM:SS a')
          } else if (element.createdDate) {
            element.createdDate = moment(element.createdDate).format('MMM DD,yyyy HH:MM:SS a')
          }
        });
        this.dataService.downloadExcel(list, 'Supplier Master', [this.ListHeader, this.ListTableKeys])
      }

    })
  }
}

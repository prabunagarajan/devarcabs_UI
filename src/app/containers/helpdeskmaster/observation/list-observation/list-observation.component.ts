import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { DataService } from '@app/services/helpdesk/data.service';
import { apiUrls } from '@appEnv/apiurls';


@Component({
  selector: 'app-list-observation',
  templateUrl: './list-observation.component.html',
  styleUrls: ['./list-observation.component.scss']
})
export class ListObservationComponent implements OnInit {
  ticketListDisplayedColumns = [
    'position',
    'issueType',   
    'observation', 
    'createdBy',
    'createdDate',
    'modifiedBy',
    'modifiedDate',
    'status',
    'action'
  ]
  noTableData = 'No Records Found';
  totalRecords = 0;
  tableData = [];
  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  tablePageIndex = 0;
  itemsPerPage = 10;
  searchmethod: boolean = false;
 
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  searchList = {
    Observation: '',
    issueType: ''
  }
  dropdowngetObservation: any;
  list: any;
  issueTypedropdrown: any;
  constructor(private router: Router, private service: CommonApiServiceService, private dataService: DataService) { }

  ngOnInit() {
    this.getall();
    this.gettable();
    this.getissueTypeActive();
  }

  getall() {
    this.service.getAll(apiUrls.getsiteobservation).subscribe((resp: any) => {
      this.list = resp.data;
      this.dropdowngetObservation = resp.data
    });
  }

  getissueTypeActive() {
    this.service.getAll(apiUrls.siteissuetypeActive).subscribe((resp: any) => {
      this.issueTypedropdrown = resp.data;
    });
  }

  onPageChange(event: PageEvent) {
    
    if (this.searchmethod) {
      this.tablePageIndexsearch = event.pageIndex;
      this.itemsPerPagesearch = event.pageSize;
      this.search();
    } else {
      this.tablePageIndex = event.pageIndex;
      this.itemsPerPage = event.pageSize;
      this.gettable();
    }
  }
  gettable() {
    let req = {
      "filters": {
        "observation": this.searchList['Observation'],
        "isssuetype_id": this.searchList['issueType']
      },
      "pageNo": this.tablePageIndex, "paginationSize": this.itemsPerPage,
       "sortField": "modifiedDate", "sortOrder": "DESC"
    }
    this.service.post(apiUrls.searchsiteobservation, req).subscribe((res: any) => {
      if (res && res !== undefined && res !== null) {
        if (res.status == "s" && res.errorCode == 200) {
          this.searchmethod = false
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
  search() {
    let req = {
      "filters": {
        "observation": this.searchList['Observation'],
        "isssuetype_id": this.searchList['issueType']
      },
      "pageNo": this.tablePageIndexsearch, "paginationSize": this.itemsPerPagesearch,
       "sortField": "modifiedDate", "sortOrder": "DESC"
    }
    this.service.post(apiUrls.searchsiteobservation, req).subscribe((res: any) => {
      if (res && res !== undefined && res !== null) {
        if (res.status == "s" && res.errorCode == 200) {
          this.searchmethod = true
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
  clear() {
    this.searchList = {
      Observation: '',
      issueType: ''
    }
    this.search();
  }
  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/Observation/view', id]);
  }

  navigateEdit(id) {
    if (id != '') {
      this.router.navigate(['/helpdeskmaster/Observation/edit', id]);
    } else {
      this.router.navigate(['/helpdeskmaster/Observation/add']);
    }

  }



  ListHeader = [
    ' Site Observation',
    'Site Issue Type',
    'Created By',
    'Created On',
    'Modified By',
    'Modified On',
    'Status',

  ];

  ListTableKeys = [
    {
      data: 'observation',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'siteIssueType',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'createdByName',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },

    {
      data: 'createdDate',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'modifiedByName',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'modifiedDate',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    }, {
      data: 'active',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
  ]
  export() {
    let req = {
      "filters": {
        "observation": this.searchList['Observation'],
        "isssuetype_id": this.searchList['issueType']
      },
      "pageNo": 0, "paginationSize": this.totalRecords,
       "sortField": "modifiedDate", "sortOrder": "DESC"
    }
    this.service.post(apiUrls.searchsiteobservation, req).subscribe((res: any) => {
      
        if (res.status == "s" && res.errorCode == 200) {
          this.dataService.downloadExcel( res.data.contents, 'Site Observation', [this.ListHeader, this.ListTableKeys])
        } 

    }); 
  
  }


}

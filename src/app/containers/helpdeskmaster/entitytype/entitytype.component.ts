import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { MatSort, MatSortable, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EntityTypeService } from '@app/services/helpdesk/entity-type.service';

@Component({
  selector: 'app-entitytype',
  templateUrl: './entitytype.component.html',
  styleUrls: ['./entitytype.component.scss']
})
export class EntitytypeComponent implements OnInit {

  searchForm: FormGroup;
  @ViewChild('formDirective', { static: true }) private formDirective: NgForm;

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  currentSortHeadActive = 'createdDate';
  currentSortDirection = 'desc';
  tablePageIndex = 0;
  itemsPerPage = 10;
  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  formSubmitted = false;

  noTableData = 'No Records Found';
  totalRecords = 0;
  tableData = [];

  statusList = [];
  entityTypeNameList = [];

  ticketListDisplayedColumns = [
    'position',
    'entityName',
    'createdBy',
    'createdDate',
    'modifiedBy',
    'modifiedDate',
    'status',
    'action'
  ]
  searchmethod: boolean;

  constructor(private router: Router,
    private fb: FormBuilder,
    private Service: EntityTypeService) {
    this.searchForm = this.fb.group({
      entityName: ['',],
      status: ['']
    })
  }

  get f() { return this.searchForm.controls; }

  ngOnInit() {
    this.getEntityTypeStatus();
    this.getTableData();
    this. list();
  }
  onPageChange(event: PageEvent) {
    if (this.searchmethod) {
      this.tablePageIndexsearch = event.pageIndex;
      this.itemsPerPagesearch = event.pageSize;
      this.search();
    } else {
      this.tablePageIndex = event.pageIndex;
      this.itemsPerPage = event.pageSize;
      this.list();
    }

  }
  getTableData() {
    this.Service.getEntityTypeList().subscribe((res: any) => {
      if (res && res !== undefined && res !== null) {
        if (res.status == "s" && res.errorCode == 200) {
          this.entityTypeNameList = res.data;

        } else {
          this.noTableData = 'No Records Found';
          this.dataSource = new MatTableDataSource<any>();
          this.entityTypeNameList = []
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
    this.formDirective.resetForm()
    this.formSubmitted = false;
    this.f.entityName.setValue('');
    this.f.status.setValue('');
    this.tablePageIndex = 0
    this.itemsPerPage = 10
    this.tablePageIndex = 0;
    this.itemsPerPage =10;
    this.totalRecords = 0
    this.list();
  }
  search() {
    let postData = {
      "filters": { "entity_name": this.f.entityName.value, "is_active": this.f.status.value  },
      "pageNo": this.tablePageIndexsearch,
      "paginationSize": this.itemsPerPagesearch,
      "sortField": this.currentSortHeadActive,
      "sortOrder": this.currentSortDirection.toUpperCase()
    }
    this.Service.searchEntityType(postData).subscribe((res: any) => {
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
  list() {
    let postData = {
      "filters": { "entity_name": this.f.entityName.value, "is_active": this.f.status.value == 'Active' ? true : this.f.status.value != '' ? false : this.f.status.value },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": this.currentSortHeadActive,
      "sortOrder": this.currentSortDirection.toUpperCase()
    }
    this.Service.searchEntityType(postData).subscribe((res: any) => {
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

  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/entity-type/view', id]);
  }

  navigateEdit(id) {
    this.router.navigate(['/helpdeskmaster/entity-type/edit', id]);
  }

  getEntityTypeStatus() {
    this.Service.getEntityTypeStatus().subscribe((responceData: any) => {
      if (responceData.status == 's' && responceData.errorCode == 200) {
        this.statusList = responceData.data;
      }
    })
  }



}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { MatSort, MatSortable, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DepartmentService } from '@app/services/helpdesk/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  searchForm: FormGroup;
  @ViewChild('formDirective',{static:true}) private formDirective: NgForm;
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
 // @ViewChild('filter', { static: true }) filter: ElementRef;
  
  currentSortHeadActive = 'createdDate';
  currentSortDirection = 'desc';
  tablePageIndex = 0;
  itemsPerPage = 10;

  noTableData = 'No Records Found';
  totalRecords = 0;
  tableData = [];

  formSubmitted = false;

  ticketListDisplayedColumns=[
    'position',
    'department',
    'created_by',
    'created_date',
    'modified_by',
    'modified_date',
    'status',
    'action'
  ]

  constructor(private router: Router,
    private fb: FormBuilder,
    private Service: DepartmentService) {
    this.searchForm = this.fb.group({
        department: ['',Validators.required],
        status: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.getTableData();
  }

  get f() { return this.searchForm.controls; }

  onPageChange(event: PageEvent) {
    this.tablePageIndex = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    //this.getAllproblems();
  }

  getTableData() {
    this.Service.getDeptList().subscribe((res: any) => {
      if (res && res !== undefined && res !== null) {
        if (res.status == "s" && res.errorCode == 200) {
          this.tableData = res.data;
          this.totalRecords = res.data.length;
          console.log(this.totalRecords);
          
          this.dataSource = new MatTableDataSource<any>(this.tableData);
          this.dataSource.paginator = this.paginator;
          console.log(this.dataSource.paginator);
          
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
    }, error => {
      this.dataSource = new MatTableDataSource<any>();
      this.noTableData = 'No Records Found';
    });
    
  }

  clearfilter(searchForm){
    this.formDirective.resetForm()
    this.formSubmitted = false;
    this.f.status.setValue('');
    this.getTableData();
  }

  search(searchForm){
    this.formSubmitted=true;
    if(searchForm.valid){
      let postData={
        "filters": {"id":this.f.department.value, "status":this.f.status.value},
       "pageNo": this.tablePageIndex,
       "paginationSize": this.itemsPerPage,
       "sortField": this.currentSortHeadActive,
       "sortOrder": this.currentSortDirection.toUpperCase()
     }
      this.Service.searchDept(postData).subscribe((res: any) => {
        if (res && res !== undefined && res !== null) {
          if (res.status == "s" && res.errorCode == 200) {
            this.tableData = res.data.contents;
            this.totalRecords = res.data.contents.length;
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
      }, error => {
        this.dataSource = new MatTableDataSource<any>();
        this.noTableData = 'No Records Found';
      });
    }
  }

  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/department/view', id]);
  }

  navigateEdit(id){
    this.router.navigate(['/helpdeskmaster/department/edit',id]);
  }

}

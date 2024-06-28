import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { WorkflowService } from '@app/services/helpdesk/workflow.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { DataService } from '@app/services/helpdesk/data.service';

@Component({
  selector: 'app-issue-from',
  templateUrl: './issue-from.component.html',
  styleUrls: ['./issue-from.component.scss']
})
export class IssueFromComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');

  list: any;

  searchList={
    issueFrom:''
  }
  dropdowngetissueFrom: any;
  showerror: boolean=false;

  constructor(private router: Router,private service: CommonApiServiceService,private dataService:DataService) { }

  ngOnInit() {
    this.showerror=false
    this.getall();
    this.getbrand();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    }; 
  }
  getbrand(){
    this.service.getAll(apiUrls.issueFromGetall).subscribe((resp: any) => {
      // this.list = resp.data;
      this.dropdowngetissueFrom = resp.data;
    });
  }
getall(){
  this.service.getAll(apiUrls.issueFromGetall).subscribe((resp: any) => {
    this.list = resp.data;
    if (this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    } else {
      this.dtTrigger.next();
    }
  });
}
  search() {
   
      this.showerror=false
    this.service.getAll(apiUrls.issueFromgetById+ this.searchList['issueFrom']).subscribe((resp: any) => {
      if(resp.status == 's'){
        let a=resp.data
        let b=[];
        b.push(a)
      this.list =  b;
      }else{
        this.list =resp
      }
      
      if (this.dtElement.dtInstance ) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    });
  
  }
  clear(){
    this.showerror=false
    this.searchList = {
      issueFrom:''
    }
    this.getall();
  }
  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/issue-from/view',id]);
  }

  navigateEdit(id) {
    if(id !=''){
      this.router.navigate(['/helpdeskmaster/issue-from/edit',id]);
    }else{
      this.router.navigate(['/helpdeskmaster/issue-from/add']);
    }
   
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ListHeader = [
    'Issue From',  
    'Created By',
    'Created On',
    'Modified By',
    'Modified On',
    'Status',
 
   ];
 
   ListTableKeys = [
     {
       data: 'issueFrom',
       "className": "Capitalise",
       render: function (data, type, row) {
         return (data ? data : '');
       }
     },
     {
       data: 'createdBy',
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
       data: 'modifiedBy',
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
   export(){
    // this.list.forEach(element => {
    //   if(element.modifiedDate){
    //     element.modifiedDate=moment(element.modifiedDate).format('MMM DD,yyyy HH:MM:SS a')
    //   }else if(element.createdDate){
    //     element.createdDate=moment(element.createdDate).format('MMM DD,yyyy HH:MM:SS a')
    //   }
      
    
    // });
     this.dataService.downloadExcel(  this.list, 'Issue From', [this.ListHeader, this.ListTableKeys])
   }

}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-subsolution',
  templateUrl: './subsolution.component.html',
  styleUrls: ['./subsolution.component.scss']
})
export class SubsolutionComponent implements OnInit {

  searchList={
    category:'',
    subCategory:'',
    issue:'',
    status: '',
  }
  list: any;
  formSubmitted = false;
  subcategory: any;
  cat: any;
  sub: any;
  issuedropdown: any;
  constructor(
    private service: CommonApiServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.getall();
    this.getIssueDetails();
    this.getCategory();
    this.getAllSubSolutions();
  }

  getAllSubSolutions() {
    this.service.getAll(apiUrls.subSolGetAll).subscribe(resp => {
      if (resp.status === 's') {
        this.list = resp.data;
      } else {
        this.list = [];
      }
    })
  }

  getCategory() {
    this.service.getAll(apiUrls.getcatogry).subscribe((resp: any) => {
      this.cat = resp.data;
    });
  }
  getSubCategory() {
    this.service.getAll(apiUrls.getsubcatogry + "?" + "categoryid=" + this.searchList['category']).subscribe((resp: any) => {
      this.sub = resp.data;

    });
  }

  getIssueDetails() {
    this.service.getAll(apiUrls.getallissues).subscribe((responceData: any) => {
      console.log(responceData);
      this.issuedropdown = (responceData.status === 's') ? responceData.data : [];
      console.log(this.issuedropdown);

    });
  }

  navigateView(id) {
    this.router.navigate([`/helpdeskmaster/subsolution/view/${id}`]);
  }

  navigateEdit(id) {
    this.router.navigate([`/helpdeskmaster/subsolution/edit/${id}`]);
  }
}

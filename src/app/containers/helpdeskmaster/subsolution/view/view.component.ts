import { Component, OnInit } from '@angular/core';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public subSolutionDetails: any;
  public subSolutionId;
  public issueResolutionStatus;

  constructor(
    private service: CommonApiServiceService,
    private alert: AlertService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subSolutionId = this.route.snapshot.paramMap.get('Id');
    this.getSubSolution(this.subSolutionId);
  }

  getSubSolution(subSolutionId) {
    this.service.getAll(`${apiUrls.subSolGetById}${subSolutionId}`).subscribe(response => {
      if (response.status === 's') {
        this.subSolutionDetails = response.data;
      } else {
        const err = response.userDisplayMesg || 'Something bad happened, please try again.';
        this.alert.showError(err);
      }
    });
  }

  updateIssueRes(selection) {
    this.issueResolutionStatus = selection;
  }

  issueResolution() {
    console.log(this.issueResolutionStatus);
  }
}

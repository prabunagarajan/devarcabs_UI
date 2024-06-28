import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';


import { IssuedetailsRoutingModule } from './issuedetails-routing.module';
import { IssuedetailsComponent } from './issuedetails.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [IssuedetailsComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    IssuedetailsRoutingModule,
    SharedModule
  ]
})
export class IssuedetailsModule { }

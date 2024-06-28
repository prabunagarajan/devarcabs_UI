import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteIssueTypeRoutingModule } from './site-issue-type-routing.module';
import { SiteIssueTypeComponent } from './site-issue-type.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [SiteIssueTypeComponent,AddComponent,ViewComponent],
  imports: [
    CommonModule,
    SiteIssueTypeRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class SiteIssueTypeModule { }

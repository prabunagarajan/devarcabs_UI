import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StieActionTakenRoutingModule } from './stie-action-taken-routing.module';
import { SiteAddComponent } from './site-add/site-add.component';
import { SiteListComponent } from './site-add/site-list/site-list.component';
import { SiteViewComponent } from './site-add/site-view/site-view.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [SiteAddComponent, SiteListComponent, SiteViewComponent],
  imports: [
    CommonModule,
    StieActionTakenRoutingModule,SharedModule,DataTablesModule
  ]
})
export class StieActionTakenModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { TicketStatusComponent } from './ticket-status.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { TicketStatusRoutingModule } from './ticket-status-routing.module';


@NgModule({
  declarations: [TicketStatusComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    TicketStatusRoutingModule,
    SharedModule,
    DataTablesModule,
    
  ]
})
export class TicketStatusModule { }

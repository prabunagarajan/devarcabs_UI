import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { DataTablesModule } from 'angular-datatables';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq-routing.module';


@NgModule({
  declarations: [FaqComponent, AddComponent,ViewComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class FaqModule { }

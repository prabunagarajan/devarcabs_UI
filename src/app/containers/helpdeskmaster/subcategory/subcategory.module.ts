import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { DataTablesModule } from 'angular-datatables';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SubcategoryComponent } from './subcategory.component';
import { SubCategoryRoutingModule } from './subcategory-routing.module';


@NgModule({
  declarations: [SubcategoryComponent, AddComponent,ViewComponent],
  imports: [
    CommonModule,
    SubCategoryRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class SubCategoryModule { }

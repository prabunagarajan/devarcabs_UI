import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopCodeMappingRoutingModule } from './shop-code-mapping-routing.module';
import { ShopListComponent } from './shop-list/shop-list.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { AddComponent } from './shop-list/add/add.component';
import { ShopViewComponent } from './shop-list/shop-view/shop-view.component';


@NgModule({
  declarations: [ShopListComponent, AddComponent, ShopViewComponent],
  imports: [
    CommonModule,
    ShopCodeMappingRoutingModule,
    CommonModule,
    SharedModule,
    DataTablesModule,
  ]
})
export class ShopCodeMappingModule { }

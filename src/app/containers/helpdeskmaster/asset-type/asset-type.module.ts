import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { AssetTypeRoutingModule } from './asset-type-routing.module';
import { AssetTypeComponent } from './asset-type.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AssetTypeComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    AssetTypeRoutingModule
  ]
})
export class AssetTypeModule { }

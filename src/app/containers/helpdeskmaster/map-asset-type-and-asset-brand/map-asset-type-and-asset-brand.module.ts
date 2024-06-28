import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MapAssetTypeAndAssetBrandRoutingModule } from './map-asset-type-and-asset-brand-routing.module';
import { MapAssetTypeAndAssetBrandComponent } from './map-asset-type-and-asset-brand.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [MapAssetTypeAndAssetBrandComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    MapAssetTypeAndAssetBrandRoutingModule
  ]
})
export class MapAssetTypeAndAssetBrandModule { }

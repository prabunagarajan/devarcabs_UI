import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { AssetAssignRoutingModule } from './asset-assign-routing.module';
import { AssetAssignComponent } from './asset-assign.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [AssetAssignComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    AssetAssignRoutingModule
  ]
})
export class AssetAssignModule { }

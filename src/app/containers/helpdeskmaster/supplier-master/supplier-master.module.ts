import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierMasterRoutingModule } from './supplier-master-routing.module';
import { SupplierMasterComponent } from './supplier-master.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@app/theme/shared/shared.module';


@NgModule({
  declarations: [SupplierMasterComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SupplierMasterRoutingModule,
    SharedModule
  ]
})
export class SupplierMasterModule { }

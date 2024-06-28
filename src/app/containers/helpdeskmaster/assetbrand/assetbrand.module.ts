import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetbrandRoutingModule } from './assetbrand-routing.module';
import { AssetbrandComponent } from './assetbrand.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@app/theme/shared/shared.module';


@NgModule({
  declarations: [AssetbrandComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    AssetbrandRoutingModule,
    SharedModule
  ]
})
export class AssetbrandModule { }

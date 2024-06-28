import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { AccessoriesRoutingModule } from './accessories-routing.module';
import { AccessoriesComponent } from './accessories.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AccessoriesComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccessoriesRoutingModule
  ]
})
export class AccessoriesModule { }

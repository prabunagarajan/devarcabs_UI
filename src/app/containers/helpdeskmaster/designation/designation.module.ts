import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationRoutingModule } from './designation-routing.module';
import { DesignationComponent } from './designation.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [DesignationComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    DesignationRoutingModule,
    SharedModule
  ]
})
export class DesignationModule { }

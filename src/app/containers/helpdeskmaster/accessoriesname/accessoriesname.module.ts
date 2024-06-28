import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesnameRoutingModule } from './accessoriesname-routing.module';
import { AccessoriesnameComponent } from './accessoriesname.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AccessoriesnameComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccessoriesnameRoutingModule
  ]
})
export class AccessoriesnameModule { }

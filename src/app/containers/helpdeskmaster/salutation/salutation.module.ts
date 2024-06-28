import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalutationRoutingModule } from './salutation-routing.module';
import { SalutationComponent } from './salutation.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@app/theme/shared/shared.module';


@NgModule({
  declarations: [SalutationComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SalutationRoutingModule,
    SharedModule
  ]
})
export class SalutationModule { }

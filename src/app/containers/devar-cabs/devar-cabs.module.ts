import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { DevarCabsRoutingModule } from './devar-cabs-routing.module';
import { MasterModule } from './master/master.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    MasterModule,
    DevarCabsRoutingModule
  ]
})
export class DevarCabsModule { }

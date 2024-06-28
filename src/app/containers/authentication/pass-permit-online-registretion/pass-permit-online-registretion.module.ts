import { PassPermitOnlineRegistretionComponent } from './pass-permit-online-registretion.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassPermitOnlineRegistretionRoutingModule } from './pass-permit-online-registretion-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';


@NgModule({
  declarations: [PassPermitOnlineRegistretionComponent],
  imports: [
    CommonModule,
    PassPermitOnlineRegistretionRoutingModule,
    SharedModule
  ]
})
export class PassPermitOnlineRegistretionModule { }

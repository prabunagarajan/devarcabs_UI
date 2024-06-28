
import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { HelpDeskMasterPageRoutingModule } from './helpdesk-routing.module';
import { MainMaterialModule } from '@app/_shared/material-module';

@NgModule({
  imports: [
    SharedModule,
    MainMaterialModule,
    HelpDeskMasterPageRoutingModule,
    SharedModule
  ],
  declarations: [ ]
})
export class HelpDeskMastersModule { }

import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '@app/theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MainMaterialModule } from '@app/_shared/material-module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    MainMaterialModule,
    AuthenticationRoutingModule
  ],
  declarations: [],
  providers: [DatePipe],
})
export class AuthenticationModule { }

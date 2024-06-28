import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [UserManagementComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    SharedModule,
    DataTablesModule,
    
  ]
})
export class UserManagementModule { }

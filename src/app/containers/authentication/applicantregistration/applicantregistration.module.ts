import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ApplicantregistrationRoutingModule } from './applicantregistration-routing.module';
import { ApplicantregistrationComponent } from './applicantregistration.component';

@NgModule({
  declarations: [
    ApplicantregistrationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ApplicantregistrationRoutingModule
  ]
})
export class ApplicantregistrationModule { }

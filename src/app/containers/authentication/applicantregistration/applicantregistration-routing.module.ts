import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicantregistrationComponent } from './applicantregistration.component';

const routes: Routes = [
  {
    path : '',
    component : ApplicantregistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantregistrationRoutingModule { }

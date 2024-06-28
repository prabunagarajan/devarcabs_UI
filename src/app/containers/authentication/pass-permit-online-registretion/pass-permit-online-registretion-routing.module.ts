import { PassPermitOnlineRegistretionComponent } from './pass-permit-online-registretion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PassPermitOnlineRegistretionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassPermitOnlineRegistretionRoutingModule { }

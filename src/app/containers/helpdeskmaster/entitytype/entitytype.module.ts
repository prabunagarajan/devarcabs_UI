import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitytypeRoutingModule } from './entitytype-routing.module';
import { EntitytypeComponent } from './entitytype.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { MainMaterialModule } from '@app/_shared/material-module';


@NgModule({
  declarations: [EntitytypeComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    EntitytypeRoutingModule,    
    SharedModule,
    MainMaterialModule
  ]
})
export class EntitytypeModule { }

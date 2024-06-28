import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { MapAssetTypeAndAssetBrandComponent } from './map-asset-type-and-asset-brand.component';


const routes: Routes = [
  {
    path: 'list',
    component: MapAssetTypeAndAssetBrandComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'addEdit/:Id',
    component: AddComponent
  },
  {
    path: 'view/:Id',
    component: ViewComponent
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapAssetTypeAndAssetBrandRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from '../assetbrand/add/add.component';
import { ViewComponent } from '../assetbrand/view/view.component';
import { AssetbrandComponent } from './assetbrand.component';


const routes: Routes = [
  { path: 'list', component: AssetbrandComponent },
  { path: 'add', component: AddComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'edit/:id', component: AddComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetbrandRoutingModule { }

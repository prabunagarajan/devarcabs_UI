import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './shop-list/add/add.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopViewComponent } from './shop-list/shop-view/shop-view.component';


const routes: Routes = [{
  path:'list',
  component:ShopListComponent
},
{
  path:'add',
  component:AddComponent
}, {
  path: 'edit/:id',
  component: AddComponent
},
{
  path: 'view/:id',
  component: ShopViewComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopCodeMappingRoutingModule { }

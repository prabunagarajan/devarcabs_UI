import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'groups',
        loadChildren: () => import('./group/grop.module').then(module => module.GroupModule)
      },
      {
        path: 'actualprobelms',
        loadChildren: () => import('./actualproblems/actualproblem.module').then(module => module.ActualProblemModule)
      },
      {
        path: 'actiontaken',
        loadChildren: () => import('./actiontaken/actiontaken.module').then(module => module.ActionTakenModule)
      },
      {
        path: 'reported',
        loadChildren: () => import('./problemsreported/problemsreported.module').then(module => module.ProbelmReportedModule)
      },
      {
        path: 'subcategory',
        loadChildren: () => import('./subcategory/subcategory.module').then(module => module.SubCategoryModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then(module => module.FaqModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
      },
      {
        path: 'issuedetails',
        loadChildren: () => import('./issuedetails/issuedetails.module').then(module => module.IssuedetailsModule)
      },
      {
        path: 'accessories',
        loadChildren: () => import('./accessories/accessories.module').then(module => module.AccessoriesModule)
      }
      ,
      {
        path: 'asset-subtype',
        loadChildren: () => import('./accessoriesname/accessoriesname.module').then(module => module.AccessoriesnameModule)
      },
      {
        path: 'priority',
        loadChildren: () => import('./priority/priority.module').then(module => module.PriorityModule)
      },
      {
        path: 'shiftconfiguration',
        loadChildren: () => import('./shiftconfiguration/shiftconfiguration.module').then(module => module.ShiftconfigurationModule)
      },
      {
        path: 'shiftworkingdays',
        loadChildren: () => import('./shiftworkingdays/shiftworkingdays.module').then(module => module.ShiftworkingdaysModule)
      },
      {
        path: 'device-accessories-status',
        loadChildren: () => import('./deviceaccessories-status/deviceaccessories-status.module').then(module =>module.DeviceaccessoriesStatusModule)
      },
      {
        path: 'subsolution',
        loadChildren: () => import('./subsolution/subsolution.module').then(module => module.SubsolutionModule)
      },
      {
        path: 'entity-type',
        loadChildren: () => import('./entitytype/entitytype.module').then(module => module.EntitytypeModule)
      },
      {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(module => module.DepartmentModule)
      },
      {
        path: 'site-issue-type',
        loadChildren: () => import('./site-issue-type/site-issue-type.module').then(module => module.SiteIssueTypeModule)
      },
      {
        path: 'salutation',
        loadChildren: () => import('./salutation/salutation.module').then(module => module.SalutationModule)
      },
      {
        path: 'designation',
        loadChildren: () => import('./designation/designation.module').then(module => module.DesignationModule)
      },
      {
        path: 'assetbrand',
        loadChildren: () => import('./assetbrand/assetbrand.module').then(module => module.AssetbrandModule)
      },
      {
        path: 'workflow',
        loadChildren: () => import('./workflow/workflow.module').then(module => module.WorkflowModule)
      },
      {
        path: 'sla',
        loadChildren: () => import('./sla/sla.module').then(module => module.SLAModule)
      },
      {
        path: 'issue-from',
        loadChildren: () => import('./issue-from/issue-from.module').then(module => module.IssueFromModule)
      },
      {
        path: 'asset-assign',
        loadChildren: () => import('./asset-assign/asset-assign.module').then(module => module.AssetAssignModule)
      },
      {
        path: 'map-asset-type-and-asset-brand',
        loadChildren: () => import('./map-asset-type-and-asset-brand/map-asset-type-and-asset-brand.module').then(module => module.MapAssetTypeAndAssetBrandModule)
      },
      {
        path: 'asset-type',
        loadChildren: () => import('./asset-type/asset-type.module').then(module => module.AssetTypeModule)
      },
      {
        path: 'supplier-master',
        loadChildren: () => import('./supplier-master/supplier-master.module').then(module =>module.SupplierMasterModule)
      },
      {
        path: 'ticket-status',
        loadChildren: () => import('./ticket-status/ticket-status.module').then(module =>module.TicketStatusModule)
      },
      {
        path: 'device-hardware-name',
        loadChildren: () => import('./device-hardware-name/device-hardware-name.module').then(module =>module.DeviceHardwareNameModule)
      },
      {
        path: 'shop-code-map',
        loadChildren: () => import('./shop-code-mapping/shop-code-mapping.module').then(module => module.ShopCodeMappingModule)
      },
      {
        path: 'Observation',
        loadChildren: () => import('./observation/observation.module').then(module => module.ObservationModule)
      },
      {
        path: 'site-action-taken',
        loadChildren: () => import('./stie-action-taken/stie-action-taken.module').then(module => module.StieActionTakenModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpDeskMasterPageRoutingModule { }

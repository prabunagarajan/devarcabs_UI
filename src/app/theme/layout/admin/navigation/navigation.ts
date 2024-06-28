import { Injectable } from '@angular/core';
import { AuthService } from '@app/services';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    title: 'Dashboard',
    type: 'item',
    url: '/dashboard/analytics',
    icon: 'feather icon-home'
  },
  {
    id: 'masters',
    name: 'Masters',
    title: 'Master',
    type: 'collapse',
    url: '/master',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'location',
        name: 'Location',
        type: 'collapse',
        children: [
          {
            id: 'location',
            name: 'Location',
            type: 'item',
            url: '/location/location/list'
          },
          {
            id: 'country',
            name: 'Country',
            type: 'item',
            url: '/location/country/list'
          },
          {
            id: 'state',
            name: 'State',
            type: 'item',
            url: '/location/state/list'
          },
          {
            id: 'district',
            name: 'District',
            type: 'item',
            url: '/location/district/list'
          },
          {
            id: 'taluk',
            name: 'Taluk',
            type: 'item',
            url: '/location/taluk/list'
          },
          {
            id: 'village',
            name: 'Village',
            type: 'item',
            url: '/location/village/list'
          },
          {
            id: 'block',
            name: 'Block',
            type: 'item',
            url: '/location/block/list'
          },
          {
            id: 'municipality',
            name: 'Municipality',
            type: 'item',
            url: '/location/municipality/list'
          },
          {
            id: 'corporation',
            name: 'Corporation',
            type: 'item',
            url: '/location/corporation/list'
          },
        ]
      },
      {
        id: 'Inventorymasters',
        title: 'Inventory',
        name: 'Inventory',
        type: 'collapse',
        // icon: 'feather icon-box',
        children: [
          {
            id: 'Category',
            name: 'Category',
            title: 'Category',
            type: 'item',
            url: '/inventory/category/list'
          },
          {
            id: 'subcategory',
            name: 'Sub Category',
            type: 'item',
            url: '/inventory/subcategory/list'
          },
          {
            id: 'product',
            name: 'Product',
            type: 'item',
            url: '/inventory/product/list'
          },
          {
            id: 'subproduct',
            name: 'Sub Product',
            type: 'item',
            url: '/inventory/subproduct/list'
          },
          {
            id: 'uom',
            name: 'UOM',
            type: 'item',
            url: '/inventory/uom/list'
          },
          {
            id: 'gstmaster',
            name: 'GST',
            type: 'item',
            url: '/inventory/gstmaster/list'
          },
          {
            id: 'storemaster',
            name: 'Store',
            type: 'item',
            url: '/inventory/storemaster/list'
          },
          {
            id: 'itemmaster',
            name: 'Item',
            type: 'item',
            url: '/inventory/itemmaster/list'
          }
        ]
      },
      {
        id: 'liquormaster',
        name: 'Liquor Category',
        type: 'item',
        url: '/master/liquor/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'entity',
        name: 'Entity',
        type: 'item',
        url: '/master/entity/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'brandmaster',
        name: 'Brand Master',
        type: 'item',
        url: '/master/brandmaster/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'liquortype',
        name: 'Liquor Type',
        type: 'item',
        url: '/master/liquortype/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'licencemaster',
        name: 'Licence',
        type: 'item',
        url: '/master/licencemaster/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'licensee',
        name: 'Licensee',
        type: 'item',
        url: '/master/licensee/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'licencetype',
        name: 'Licence Type',
        type: 'item',
        url: '/master/licencetype/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'indregient',
        name: 'Ingredient',
        title: 'Ingredient',
        type: 'item',
        url: '/master/ingrediantmaster/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'label',
        name: 'Label',
        type: 'item',
        url: '/master/lablemaster/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'department',
        name: 'Department',
        type: 'item',
        url: '/master/department/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'cencus',
        name: 'Census Data of Districts',
        type: 'item',
        url: '/master/cencusdataofdistricts/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'feemaster',
        name: 'Fee',
        type: 'item',
        url: '/master/feemaster/list',
        // icon: 'feather icon-box',

      },
      {
        id: 'vehiclemaster',
        name: 'Vehicle',
        type: 'collapse',
        // icon: 'feather icon-box',
        children: [
          {
            id: 'vehicle',
            name: 'Vehicle Make',
            type: 'item',
            url: '/master/vehiclemake/list',
            // icon: 'feather icon-box',
          },
          {
            id: 'vehiclemodel',
            name: 'Vehicle Model',
            type: 'item',
            url: '/master/vehiclemodel/list',
            // icon: 'feather icon-box',
          },
        ]
      },
      {
        id: 'penaltymaster',
        name: 'Penalty',
        type: 'item',
        url: '/master/penaltymaster/list',
        // icon: 'feather icon-box',

      },
      {
        id: 'producttype',
        name: 'Product Type',
        type: 'item',
        url: '/master/product-type/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'transfermode',
        name: 'Transfer Mode',
        type: 'item',
        url: '/master/transfer-mode/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'consmuptiontype',
        name: 'Consumption Type',
        type: 'item',
        url: '/master/consuption-type/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'supplytype',
        name: 'Supply Type',
        type: 'item',
        url: '/master/supplytype/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'routemaster',
        name: 'Route Master',
        type: 'item',
        url: '/master/routemaster/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'status',
        name: 'Status',
        type: 'item',
        url: '/master/status/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'tanktype',
        name: 'Tank Type',
        type: 'item',
        url: '/master/tanktype/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'year',
        name: 'Year',
        type: 'item',
        url: '/master/year/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'molassestypemaster',
        name: 'Molasses Type',
        type: 'item',
        url: '/master/molasses-type/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'verificationtypemaster',
        name: 'Verification Type',
        type: 'item',
        url: '/master/verification-type/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'domain',
        name: 'Domain',
        type: 'item',
        url: '/master/domain/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'packagetype',
        name: 'Package Type',
        type: 'item',
        url: '/master/packagetype/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'gender',
        name: 'Gender',
        type: 'item',
        url: '/master/gender/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'applicanttype',
        name: 'Applicant Type',
        type: 'item',
        url: '/master/applicationtype/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'applicantstatus',
        name: 'Applicant Status',
        type: 'item',
        url: '/master/applicationstatus/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'stage',
        name: 'Stage',
        type: 'item',
        url: '/master/stage/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'revenue',
        name: 'Revenue Component',
        type: 'item',
        url: '/master/revenue/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'modeofpay',
        name: 'Mode of Payment',
        type: 'item',
        url: '/master/modeofpay/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'measurement',
        name: 'Measurements',
        type: 'item',
        url: '/master/measurement/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'rawmaterial',
        name: 'Raw Material',
        type: 'item',
        url: '/master/rawmaterial/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'document',
        name: 'Document Type',
        title: 'Document Type',
        type: 'item',
        url: '/master/document/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'licencecategory',
        name: 'License Category ',
        type: 'item',
        url: '/master/licencecategory/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'cartons',
        name: 'Cartons',
        type: 'item',
        url: '/master/cartons/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'strength',
        name: 'Strength',
        type: 'item',
        url: '/master/strength/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'spirittype',
        name: 'Spirit Type',
        type: 'item',
        url: '/master/spirit-type/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'dip',
        name: 'Dip Master',
        type: 'item',
        url: '/master/dip/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'tankshape',
        name: 'Tank Shape',
        type: 'item',
        url: '/master/tankshape/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'tankshape',
        name: 'Tank Material',
        type: 'item',
        url: '/master/tankmaterial/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'tankcover',
        name: 'Tank Cover Type',
        type: 'item',
        url: '/master/tankcovertype/list',
        // icon: 'feather icon-box',
      },
      {
        id: 'lmm-templates',
        name: 'Fileuploads LMM',
        type: 'item',
        url: '/master/licensetemplateupload'
      },
      {
        id: 'workflowconfiguration',
        name: 'Workflow Configuration',
        type: 'item',
        url: '/master/workflowconfig/list'
      },
      {
        id: 'etingen',
        name: 'ETIN Generation',
        type: 'item',
        url: '/master/etingenerate/list'
      },
      {
        id: 'division',
        name: 'Division',
        type: 'item',
        url: '/master/division/list'
      },
      {
        id: 'feetype',
        name: 'Fee type',
        type: 'item',
        url: '/master/feetype/list'
      },
      {
        id: 'headcode',
        name: 'Head code',
        type: 'item',
        url: '/master/headcode/list'
      },
      {
        id: 'description',
        name: 'Description',
        type: 'item',
        url: '/master/description/list'
      },
      {
        id: 'treasury',
        name: 'Treasury',
        type: 'item',
        url: '/master/treasury/list'
      }
    ]
  },
  {
    id: 'usermanagement',
    name: 'User Management',
    type: 'collapse',
    icon: 'feather icon-users',
    children: [
      {
        id: 'usermanagement',
        name: 'User Management',
        type: 'item',
        url: '/usermanagement/user/list'
      },
      {
        id: 'rolemanagement',
        name: 'Role Management',
        type: 'item',
        url: '/usermanagement/role/list'
      },
      {
        id: 'designation',
        name: 'Designation',
        type: 'item',
        url: '/usermanagement/designation/list'
      },
      // {
      //   id: 'workflowmanagement',
      //   name: 'Workflow Management',
      //   type: 'item',
      //   url: '/usermanagement/workflowmanagement/list'
      // }
    ]
  }
];

@Injectable()
export class NavigationItem {

  constructor(
    private authService: AuthService
  ) { }

  public get() {
    let key = 'fromConst';
    if (this.authService.getUserId()) {
      if (this.authService.getUserMenus()) {
        key = 'fromLocalStorage';
      }
    }

    return JSON.parse(this.authService.getUserMenus());
  }
}

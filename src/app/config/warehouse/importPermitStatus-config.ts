export class ImportPermiStatusConfig {

  public static titleSection = {
    list: {
      title: 'ImportPermitStatus Registration',
      button: {
        text: 'Add ImportPermitStatus UP WareHouse',
        url: '/supplychainmanagement/warehouse/importpermitstatus/add'
      }
    },
    add: {
      title: 'Warehouse'
    },
    edit: {
      title: '/supplychainmanagement/warehouse/importpermitstatus/edit'

    },
    view: {
      title: '/supplychainmanagement/warehouse/importpermitstatus/view'
    }
  };



  public static breadcrumbs = [
    // {
    //   text: 'Warehouse',
    //   url: '/supplychainmanagement/warehouse/importpermit/list',
    //   hasHref: true
    // },
    // {
    //   text: 'Brand Registration',
    //   url: '/supplychainmanagement/warehouse/importpermit/list',
    //   hasHref: true
    // }
  ];

  public static columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'Parent Distillery',
      displayName: 'bondWarehouse.importpermitstatus.parentunitname',
      type: 'string'
    },
    {
      name: 'UP',
      displayName: 'bondWarehouse.importpermitstatus.parentunitstate',
      type: 'string'
    },
    {
      name: 'importPermitIndentDetails?.unitName',
      displayName: 'bondWarehouse.importpermitstatus.warehousename',
      displayFcn: (item: any) => item.importPermitIndentDetails.unitName,
      type: 'objstring'
    },
    {
      name: 'indentNo',
      displayName: 'bondWarehouse.importpermitstatus.permitnumber',
      type: 'string'
    },
    {
      name: 'importPermitIndentDetails?.importPermitStatus',
      displayName: 'bondWarehouse.importpermitstatus.ststus',
      displayFcn: (item: any) => item.importPermitIndentDetails.importPermitStatus,
      type: 'objstring'
    },
    //   {Permitnumber
    //     name: 'active',
    //     displayName: 'usermanagement.common.status',
    //     type: 'boolean',
    //     optionVal: ['Active', 'In-Active']
    //   },
  ];
}
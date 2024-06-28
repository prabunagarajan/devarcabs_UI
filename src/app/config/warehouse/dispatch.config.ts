import * as moment from 'moment';

export class DispatchConfig {

    public static titleSection = {
      list: {
        title: 'dispatch Registration',
        button: {
          text: 'Add dispatch UP WareHouse',
          url: '/supplychainmanagement/warehouse/dispatch/add'
        }
      },
      add: {
        title: 'Warehouse'
      },
      edit: {
        title: '/supplychainmanagement/warehouse/dispatch/edit'
  
      },
      view: {
        title: '/supplychainmanagement/warehouse/dispatch/view'
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

//   here we need to change name values. 
//   once api redy integrated those values.
    public static columns = [
      {
        name: 'id',
        displayName: 'bondWarehouse.Dispatch.sno',
        type: 'number'
      },
      {
        name: 'issueDate',
        displayName: 'bondWarehouse.Dispatch.issuedate',
        // displayFcn: (item: any) => moment(item.transportPassDetails.issueDate).format('DD-MM-yyyy'),
        type: 'date'
      },
      {
        name: 'transportDate',
        displayName: 'bondWarehouse.Dispatch.transportdate',
        // displayFcn: (item: any) => moment(item.transportPassDetails.transportDate).format('DD-MM-yyyy'),
        type: 'date'
      },
      {
        name: 'transportNo',
        displayName: 'bondWarehouse.Dispatch.transportpassnumber',
        // displayFcn: (item: any) => item.transportPassDetails.transportNo,
        type: 'string'
      },
      {
        name: 'unitName',
        displayName: 'bondWarehouse.Dispatch.entityname',
        // displayFcn: (item: any) => item.transportPassDetails.unitName,
        type: 'string'
      },  
    {
        name: 'totNoOfCasesRequested',
        displayName: 'bondWarehouse.Dispatch.totalnoofcasesrequested',
        // displayFcn: (item: any) => item.transportPassDetails.totNoOfCasesRequested,
        type: 'string'
      },
      {
        name: 'totNoOfBottlesRequested',
        displayName: 'bondWarehouse.Dispatch.totalnoofbottlesrequested',
        // displayFcn: (item: any) => item.transportPassDetails.totNoOfBottlesRequested,
        type: 'string'
      },
    //   {
    //     name: 'importPermitIndentDetails?.importPermitStatus',
    //     displayName: 'Status',
    //     displayFcn: (item: any) => item.importPermitIndentDetails.importPermitStatus,
    //     type: 'objstring'
    //   },
      //   {Permitnumber
      //     name: 'active',
      //     displayName: 'usermanagement.common.status',
      //     type: 'boolean',
      //     optionVal: ['Active', 'In-Active']
      //   },
      //displayFcn: (item: any) => item.importPermitIndentDetails.unitName,
    ];
  }
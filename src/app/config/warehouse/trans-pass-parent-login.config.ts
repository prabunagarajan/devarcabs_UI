export class TranPassParenrLoginConfig {

    public static titleSection = {
      list: {
        title: 'dispatch Registration',
        button: {
          text: 'Add dispatch UP WareHouse',
          url: '/supplychainmanagement/warehouse/transpassparentlogin/add'
        }
      },
      add: {
        title: 'Warehouse'
      },
      edit: {
        title: '/supplychainmanagement/warehouse/transpassparentlogin/edit'
  
      },
      view: {
        title: '/supplychainmanagement/warehouse/transpassparentlogin/view'
      }
    };
  
  
  
    public static breadcrumbs = [
      // {
      //   text: 'Warehouse',
      //   url: '/supplychainmanagement/warehouse/transpassparentlogin/list',
      //   hasHref: true
      // },
      // {
      //   text: 'Brand Registration',
      //   url: '/supplychainmanagement/warehouse/transpassparentlogin/list',
      //   hasHref: true
      // }
    ];

//   here we need to change name values. 
//   once api redy integrated those values.
    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'issueDate',
        displayName: 'bondWarehouse.transportpassgen.issuedate',
        type: 'date'
      },
      {
        name: 'transportDate',
        displayName: 'bondWarehouse.TransportPassCancellation.transportpassdate',
        type: 'date'
      },
      {
        name: 'transportPassNo',
        displayName: 'bondWarehouse.transportpassgen.transportpassno',
        type: 'string'
      },
      {
        name: 'noofPermits',
        displayName: 'bondWarehouse.transportpassgen.noofpermits',
        type: 'number'
      },  
    {
        name: 'totalNoofCases',
        displayName: 'bondWarehouse.transportpassgen.totalnoofcasesreq',
        //displayFcn: (item: any) => item.importPermitIndentDetails.unitName,
        type: 'number'
      },
      {
        name: 'totalNoofBottles',
        displayName: 'bondWarehouse.transportpassgen.totalnofbottlesreq',
        type: 'number'
      },
      {
        name: 'status',
        displayName: 'master.common.status',
        //displayFcn: (item: any) => item.importPermitIndentDetails.importPermitStatus,
        type: 'string'
      },
      //   {Permitnumber
      //     name: 'active',
      //     displayName: 'usermanagement.common.status',
      //     type: 'boolean',
      //     optionVal: ['Active', 'In-Active']
      //   },
      //displayFcn: (item: any) => item.importPermitIndentDetails.unitName,
    ];
  }
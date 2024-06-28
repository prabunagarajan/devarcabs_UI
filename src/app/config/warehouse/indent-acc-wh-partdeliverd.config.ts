export class IndentAccPartDeliveredConfig {

    public static titleSection = {
      list: {
        title: 'Transpassgenerationnew Bond WereHouse',
        button: {
          text: 'Add Transpassgenerationnew WareHouse',
          url: '/supplychainmanagement/warehouse/transpassgenerationnew/add'
        }
      },
      add: {
        title: 'Warehouse'
      },
      edit: {
        title: '/supplychainmanagement/warehouse/transpassgenerationnew/edit'
  
      },
      view: {
        title: '/supplychainmanagement/warehouse/transpassgenerationnew/view'
      }
    };
  
  
  
    public static breadcrumbs = [
      // {
      //   text: 'Warehouse',
      //   url: '/supplychainmanagement/warehouse/transpassgenerationnew/list',
      //   hasHref: true
      // },
      // {
      //   text: 'Brand Registration',
      //   url: '/supplychainmanagement/warehouse/transpassgenerationnew/list',
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
        name: 'indentNo',
        displayName: 'bondWarehouse.indentacceptance.indentno',
        type: 'string'
      },
      {
        name: 'indentDate',
        displayName: 'bondWarehouse.indentacceptance.indentdate',
        type: 'date'
      },
      {
        name: 'indentRequestDetails?.unitLicenseType',
        displayName: 'bondWarehouse.indentacceptance.unittype',
        displayFcn: (item: any) => item.indentRequestDetails.unitLicenseType,
        type: 'objstring'
      },  
      {
        name: 'indentRequestDetails?.unitName',
        displayName: 'bondWarehouse.indentacceptance.unitname',
        displayFcn: (item: any) => item.indentRequestDetails.unitName,
        type: 'objstring'
      },
      {
        name: 'indentRequestDetails?.totalNoOfCases',
        displayName: 'bondWarehouse.indentacceptance.noofcases',
        displayFcn: (item: any) => item.indentRequestDetails.totalNoOfCases,
        type: 'objstring'
      },
    {
        name: 'indentRequestDetails?.totalNoOfBottles',
        displayName: 'bondWarehouse.indentacceptance.noofcasessupplied',
        displayFcn: (item: any) => item.indentRequestDetails.totalNoOfBottles,
        type: 'number'
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
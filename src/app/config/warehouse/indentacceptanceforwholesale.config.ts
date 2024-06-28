export class IndentAcceptanceforWholesaleConfig {

    public static titleSection = {
      list: {
        title: 'IndentAcceptanceforWholesale Bond WereHouse',
        button: {
          text: 'Add IndentAcceptanceforWholesale WareHouse',
          url: '/supplychainmanagement/warehouse/indentacceptanceforwholesale/add'
        }
      },
      add: {
        title: 'Warehouse'
      },
      edit: {
        title: '/supplychainmanagement/warehouse/indentacceptanceforwholesale/edit'
  
      },
      view: {
        title: '/supplychainmanagement/warehouse/indentacceptanceforwholesale/view'
      }
    };
  
  
  
    public static breadcrumbs = [
      // {
      //   text: 'Warehouse',
      //   url: '/supplychainmanagement/warehouse/indentacceptanceforwholesale/list',
      //   hasHref: true
      // },
      // {
      //   text: 'Brand Registration',
      //   url: '/supplychainmanagement/warehouse/indentacceptanceforwholesale/list',
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
        name: 'unitType',
        displayName: 'bondWarehouse.indentacceptance.unittype',
        // displayFcn: (item: any) => item.indentRequestDetails.unitLicenseType,
        type: 'string'
      },  
    {
        name: 'unitName',
        displayName: 'bondWarehouse.indentacceptance.unitname',
      //  displayFcn: (item: any) => item.indentRequestDetails.unitName,
        type: 'string'
      },
      {
        name: 'totNoOfCases',
        displayName: 'bondWarehouse.indentacceptance.noofcases',
       // displayFcn: (item: any) => item.indentRequestDetails.totalNoOfCases,
         type: 'string'
        
      },
      {
        name: 'totNoOfBottles',
        displayName: 'bondWarehouse.indentacceptance.nofbottles',
       // displayFcn: (item: any) => item.indentRequestDetails.totalNoOfBottles,
        type: 'string'
       
      },
      {
        name: 'indentRequestStatus',
        displayName: 'bondWarehouse.indentacceptance.status',
       // displayFcn: (item: any) => item.indentRequestDetails.indentRequestStatus,
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
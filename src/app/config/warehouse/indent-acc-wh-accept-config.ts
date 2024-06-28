export class IndentAcceptedConfig {

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
        name: 'unitName',
        displayName: 'bondWarehouse.indentacceptance.unitname',
        //displayFcn: (item: any) => item.indentRequestDetails.unitName,
        type: 'string'
      },
    {
        name: 'totNoOfCases',
        displayName: 'bondWarehouse.indentacceptance.noofcases',
        //displayFcn: (item: any) => item.importPermitIndentDetails.unitName,
        type: 'string'
      },
      {
        name: 'totNoOfBottles',
        displayName: 'bondWarehouse.indentacceptance.nofbottles',
        //displayFcn: (item: any) => item.importPermitIndentDetails.unitName,
        type: 'string'
      },
      {
        name: 'indentRequestStatus',
        displayName: 'bondWarehouse.indentacceptance.status',
      //  displayFcn: (item: any) => item.indentRequestDetails.indentRequestStatus,
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
export class AccidentalApplicationConfig {

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
        displayName: 'bondWarehouse.transportpassgen.sno',
        type: 'number'
      },
      {
        name: 'RE1122',
        displayName: 'bondWarehouse.accidentalcase.request',
        type: 'number'
      },
      {
        name: 'date',
        displayName: 'bondWarehouse.accidentalcase.requestdate',
        type: 'date'
      },
      {
        name: 'transportPassNo',
        displayName: 'bondWarehouse.accidentalcase.transportno',
        type: 'string'
      },
      {
        name: 'transportPassDate',
        displayName: 'bondWarehouse.accidentalcase.transportpassdate',
        type: 'date'
      },  
    {
        name: 'accidentalDistrict',
        displayName: 'bondWarehouse.accidentalcase.acdistlocation',
        //displayFcn: (item: any) => item.importPermitIndentDetails.unitName,
        type: 'string'
      },
      {
        name: 'status',
        displayName: 'bondWarehouse.common.status',
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
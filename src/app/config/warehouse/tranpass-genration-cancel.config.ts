export class TranspassGenerationnewCancelConfig {

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
        displayName: 'bondWarehouse.transportpassgen.sno',
        type: 'number'
      },
      {
        name: 'applicationID',
        displayName: 'bondWarehouse.transportpassgen.applicationId',
        // ApplicationID
        type: 'string'
      },
      {
        name: 'transportPassType',
        displayName: 'bondWarehouse.transportpassgen.transportpasstype',
        // Transport Pass Type
        type: 'string'
      },
      {
        name: 'transportNo',
        displayName: 'bondWarehouse.transportpassgen.transportpassno',
        // Transport Pass  Number
        // transportPassNumber
        type: 'string'
      },  
      {
        name: 'applicationDate',
        displayName: 'bondWarehouse.transportpassgen.applicationdate',
        //displayFcn: (item: any) => item.importPermitIndentDetails.unitName,
        type: 'date'
      },
    {
        name: 'premisesType',
        displayName: 'bondWarehouse.transportpassgen.premisestype',
        // Premises Type
        //displayFcn: (item: any) => item.importPermitIndentDetails.unitName,
        type: 'string'
      },
      {
        name: 'requestType',
        displayName: 'bondWarehouse.transportpassgen.requesttype',
        // Request Type
        type: 'string'
      },
      {
        name: 'status',
        displayName: 'bondWarehouse.common.status',
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
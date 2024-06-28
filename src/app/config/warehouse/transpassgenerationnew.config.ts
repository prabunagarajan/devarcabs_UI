export class TranspassGenerationnewConfig {

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
        name: 'issueDate',
        displayName: 'bondWarehouse.transportpassgen.issuedate',
        // Issue Date
        type: 'date'
      },
      {
        name: 'transportDate',
        displayName: 'bondWarehouse.transportpassgen.transportdate',
        // Transport Date
        type: 'date'
      },
      {
        name: 'transportNo',
        displayName: 'bondWarehouse.transportpassgen.transportpassno',
        // Transport Pass No
        type: 'string'
      },  
      {
        name: 'unitName',
        displayName: 'bondWarehouse.transportpassgen.unitname',
        // Unit Name
        type: 'string'
      },
    {
        name: 'totNoOfCasesRequested',
        displayName: 'bondWarehouse.transportpassgen.totalnoofcasesreq',
        // No of Cases Requested
        type: 'string'
      },
      {
        name: 'totNoOfBottlesRequested',
        displayName: 'bondWarehouse.transportpassgen.totalnofbottlesreq',
        // .Total No of Bottles Requested
        type: 'string'
      },
      {
        name: 'transportPassStatus',
        displayName: 'bondWarehouse.common.status',
        type: 'string',
        badgeColors: {
            SUBMITTED: 'badge-success',
            DRAFT: 'badge-warning'
          }
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
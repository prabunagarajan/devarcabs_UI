export class ReceivedImportPermitsConfig {
    public static titleSection = {
      list: {
          title: 'ReceviedImportPermits',
          button: {
              text: 'Add ReceviedImportPermits upwarehouse',
              url: '/supplychainmanagement/warehouse/receivedimportpermits/add'
          }
      },
      add: {
          title: 'Warehouse'
      },
      edit: {
        title: '/supplychainmanagement/warehouse/receivedimportpermits/edit'
    },
    view: {
        title: '/supplychainmanagement/warehouse/receivedimportpermits/view'
    }
    };
    public static breadcrumbs = [
      // {
      //   text: 'Wholesale',
      //   url: '/wholesale/receivedimportpermits/list',
      //   hasHref: true
      // },
      // {
      //   text: 'Indent Request',
      //   url: '/wholesale/receivedimportpermits/list',
      //   hasHref: true
      // },
      // {
      //     text: 'List',
      //     url: '/wholesale/receivedimportpermits/list',
      //     hasHref: true
      //   },
    ]
      public static columns = [
        {
          name: 'id',
          displayName: 'bondWarehouse.transportpassgen.sno',
          type: 'number'
        },
        {
          name: 'indentDate',
          displayName: 'bondWarehouse.receivedimportpermit.date',
          type: 'date'
        },
        {
          name: 'indentNo',
          displayName: 'bondWarehouse.receivedimportpermit.permitnumber',
          type: 'string'
        },
        {
          name: 'importPermitIndentDetails?.importPermitProdDetails[0].noOfCases',
          displayName: 'bondWarehouse.receivedimportpermit.noofcasereq',
          displayFcn: (item: any) => item.importPermitIndentDetails.importPermitProdDetails[0].noOfCases,
          type: 'objstring'
        },
        {
          name: 'importPermitIndentDetails?.importPermitProdDetails[0].noOfBottles',
          displayName: 'bondWarehouse.receivedimportpermit.noofbottlereq',
          displayFcn: (item: any) => item.importPermitIndentDetails.importPermitProdDetails[0].noOfBottles,
          type: 'objstring'
        },
        {
          name: 'importPermitIndentDetails?.importPermitStatus',
          displayName: 'bondWarehouse.common.status',
          displayFcn: (item: any) => item.importPermitIndentDetails.importPermitStatus,
          type: 'objstring',
        }      
      ];
  
  }
export class ImportPermitRequestConfig {
    public static titleSection = {
      list: {
          title: 'Outside UP Bond Warehouse-Importpermit Request',
          button: {
              text: 'Add Outside upwarehouse',
              url: '/supplychainmanagement/warehouse/importpermitnew/add'
          }
      },
      add: {
          title: 'Warehouse'
      },
      edit: {
          title: '/supplychainmanagement/warehouse/importpermitnew/edit'
      },
      view: {
          title: '/supplychainmanagement/warehouse/importpermitnew/view'
      }
    };
    public static breadcrumbs = [
      {
        text: 'Wholesale',
        url: '/warehouse/importpermitnew/list',
        hasHref: true
      },
      {
        text: 'Indent Request',
        url: '/wholesale/importpermitnew/list',
        hasHref: true
      },
      {
          text: 'List',
          url: '/wholesale/importpermitnew/list',
          hasHref: true
        },
    ]
      public static columns = [
        {
          name: 'id',
          displayName: '#',
          type: 'number'
        },
        {
          name: 'indentNo',
          displayName: 'bondWarehouse.importPermitRequest.importpermitnumber',
          type: 'string'
        },
        {
          name: 'indentDate',
          displayName: 'bondWarehouse.importPermitRequest.permitdate',
          type: 'date'
        },
        {
          name: 'importPermitIndentDetails?.totalNoOfCases', 
          displayName: 'bondWarehouse.importPermitRequest.totnoofcase',
          displayFcn: (item: any) => item.importPermitIndentDetails.totalNoOfCases,
          type: 'objstring'
        },
        {
          name: 'importPermitIndentDetails?.totalNoOfBottles',
          displayName: 'bondWarehouse.importPermitRequest.totnoofbottle',
          displayFcn: (item: any) => item.importPermitIndentDetails.totalNoOfBottles,
          type: 'objstring'
        },
        {
            name: 'importPermitIndentDetails?.totBulkLitres',
            displayName: 'bondWarehouse.importPermitRequest.totbulkltr',
            displayFcn: (item: any) => item.importPermitIndentDetails.totBulkLitres,
            type: 'objstring'
          },
          {
            name: 'importPermitIndentDetails?.importPermitStatus',
            displayName: 'bondWarehouse.importPermitRequest.importPermitstatus',
            displayFcn: (item: any) => item.importPermitIndentDetails.importPermitStatus,
            type: 'objstring'
          },
        {
          name: 'status',
          displayName: 'bondWarehouse.importPermitRequest.ststus',
          // displayFcn: (item: any) => item.status,
          type: 'string'
          // name: 'brandRegistrationDetails?.brandRawMaterials[0]?.status',   importPermitStatus under importPermitIndentDetails
          // displayName: 'Status',
          // type: 'options',
          // badgeColors: {
          //   SUBMITTED: 'badge-success',
          //   DRAFT: 'badge-warning'
          // }
        }      
      ];
  
  
  }
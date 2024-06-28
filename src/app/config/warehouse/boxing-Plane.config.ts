export class BoxingPlanenConfig {
    public static titleSection = {
      list: {
          title: ' Warehouse-boxing Registration',
          button: {
              text: 'Add warehouse',
              url: '/supplychainmanagement/warehouse/boxing/add'
          }
      },
      add: {
          title: 'Warehouse'
      },
      edit: {
          title: '/supplychainmanagement/warehouse/boxing/edit'
      },
      view: {
          title: '/supplychainmanagement/warehouse/boxing/view'
      }
    };
    public static breadcrumbs = [
      // {
      //   text: 'Wholesale',
      //   url: '/wholesale/outupdistlabelreg/list',
      //   hasHref: true
      // },
      // {
      //   text: 'Indent Request',
      //   url: '/wholesale/outupdistlabelreg/list',
      //   hasHref: true
      // },
      // {
      //     text: 'List',
      //     url: '/wholesale/outupdistlabelreg/list',
      //     hasHref: true
      //   },
    ]
      public static columns = [
        {
          name: 'id',
          displayName: 'bondWarehouse.Dispatch.sno',
          type: 'number'
        },
        {
          name: 'date',
          displayName: 'bondWarehouse.boxing.date',
          type: 'date'
        },
        {
          name: 'BOXX',
          displayName: 'bondWarehouse.boxing.boxingid',
          type: 'string'
        },
        {
            name: 'plannoId',
            displayName: 'bondWarehouse.boxing.planeid',
            type: 'number'
          },
          {
            name: 'brandResponseDto?.brandName',
            displayName: 'bondWarehouse.boxing.brandname',
            displayFcn: (item: any) => item.brandResponseDto.brandName,
            type: 'objstring'
          },
          {
            name: 'measurementResponseDto?.desc',
            displayName: 'bondWarehouse.boxing.size',
            displayFcn: (item: any) => item.measurementResponseDto.desc,
            type: 'objstring'
          },
        {
            name: 'noOfBottle',
            displayName: 'bondWarehouse.boxing.planedbottle',
            type: 'number'
        },
        {
            name: 'boxingNoOfBox',
            displayName: 'bondWarehouse.boxing.bottlingno',
            type: 'number'
        },
        {
          name: 'boxingNooOfBottle',
          displayName: 'bondWarehouse.boxing.bottlingbottle',
          type: 'number'
        },
        {
          name: 'etin',
          displayName: 'bondWarehouse.boxing.etin',
          type: 'string'
        },
        
        {
          name: 'status',
          displayName: 'bondWarehouse.common.status',
          type: 'string'
          // name: 'brandRegistrationDetails?.brandRawMaterials[0]?.status',
          // displayName: 'Status',
          // type: 'options',
          // badgeColors: {
          //   SUBMITTED: 'badge-success',
          //   DRAFT: 'badge-warning'
          // }
        }      
      ];
  
  
  }
export class BottlingPlaneConfig {
    public static titleSection = {
      list: {
          title: 'BottlingPlane UP Warehouse-BottlingPlane',
          button: {
              text: 'Add Outside upwarehouse',
              url: '/supplychainmanagement/warehouse/bottlingprodplannew/add'
          }
      },
      add: {
          title: 'Warehouse'
      },
      edit: {
          title: 'Warehouse'
      },
      view: {
          title: 'Warehouse'
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
          displayName: '#',
          type: 'number'
        },
        {
          name: 'planDate',
          displayName: 'bondWarehouse.bottlingproductionplan.requesteddate',
          type: 'date'
        },
        {
          name: 'planId',
          displayName: 'bondWarehouse.bottlingproductionplan.planid',
          type: 'string'
        },
        {
          name: 'brandResponseDto.brandName',
          displayName: 'bondWarehouse.stockinhand.brandname',
          displayFcn: (item: any) => item.brandResponseDto.brandName,
          type: 'objstring'
        },
        {
          name: 'productionLine',
          displayName: 'bondWarehouse.bottlingproductionplan.productionline',
          type: 'string'
        },


        {
            name: 'noOfCases',
            displayName: 'bondWarehouse.bottlingproductionplan.noofcases',
            type: 'string'
          },
          {
            name: 'status',
            displayName: 'master.common.status',
            type: 'string'
          },
       
      ];
  
  
  }
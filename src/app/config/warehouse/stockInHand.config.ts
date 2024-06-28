export class StockInHandConfig {

    public static titleSection = {
      list: {
        title: 'stockinhand Registration',
        button: {
          text: 'Add stockinhand UP WareHouse',
          url: '/supplychainmanagement/warehouse/stockinhand/add'
        }
      },
      add: {
        title: 'Warehouse'
      },
      edit: {
        title: '/supplychainmanagement/warehouse/stockinhand/edit'
  
      },
      view: {
        title: '/supplychainmanagement/warehouse/stockinhand/view'
      }
    };
  
  
  
    public static breadcrumbs = [
      // {
      //   text: 'Warehouse',
      //   url: '/supplychainmanagement/warehouse/stockinhand/list',
      //   hasHref: true
      // },
      // {
      //   text: 'Brand Registration',
      //   url: '/supplychainmanagement/warehouse/stockinhand/list',
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
        name: 'brandName',
        displayName: 'bondWarehouse.stockinhand.brandname',
        type: 'string'
      },
      {
        name: 'liquorType',
        displayName: 'bondWarehouse.stockinhand.liquortype',
        type: 'string'
      },
      {
        name: 'liquorSubType',
        displayName: 'bondWarehouse.stockinhand.subliquortype',
        type: 'string'
      },
      {
        name: 'packageSize',
        displayName: 'bondWarehouse.stockinhand.packagesize',
        type: 'number'
      },  
    {
        name: 'packageType',
        displayName: 'bondWarehouse.stockinhand.packagetype',
        //displayFcn: (item: any) => item.importPermitIndentDetails.unitName,
        type: 'string'
      },
      {
        name: 'availableCases',
        displayName: 'bondWarehouse.stockinhand.availablecases',
        type: 'number'
      },
      {
        name: 'availableBottles',
        displayName: 'bondWarehouse.stockinhand.availablebottles',
        type: 'number'
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
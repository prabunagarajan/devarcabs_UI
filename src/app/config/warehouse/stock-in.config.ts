export class StockInConfig {

    public static titleSection = {
      list: {
        title: 'Stock In Bond WereHouse',
        button: {
          text: 'Add Stockin  WareHouse',
          url: '/supplychainmanagement/warehouse/stockin/add'
        }
      },
      add: {
        title: 'Warehouse'
      },
      edit: {
        title: '/supplychainmanagement/warehouse/stockin/edit'
  
      },
      view: {
        title: '/supplychainmanagement/warehouse/stockin/view'
      }
    };
  
  
  
    public static breadcrumbs = [
      // {
      //   text: 'Warehouse',
      //   url: '/supplychainmanagement/warehouse/stockin/list',
      //   hasHref: true
      // },
      // {
      //   text: 'Brand Registration',
      //   url: '/supplychainmanagement/warehouse/stockin/list',
      //   hasHref: true
      // }
    ];

    public static columns = [
      {
        name: 'id',
        displayName: 'bondWarehouse.transportpassgen.sno',
        type: 'number'
      },
      {
        name: 'stockInDate',
        displayName: 'bondWarehouse.stockin.tpdate',
        type: 'date'
      },
      {
        name: 'transportationPassNo',
        displayName: 'bondWarehouse.stockin.tpnumber',
        type: 'string'
      },
      {
        name: 'totalNoofPermit',
        displayName: 'bondWarehouse.stockin.totnoofpermit',
        type: 'string'
      },  
    {
        name: 'totalReceivedCases',
        displayName: 'bondWarehouse.stockin.totalnoofcaserreceivved',
        type: 'string'
      },
      {
        name: 'totalReceivedBottles',
        displayName: 'bondWarehouse.stockin.totnoofbottlereceived',
        type: 'string'
      },
      // {
      //   name: 'importPermitIndentDetails?.importPermitStatus',
      //   displayName: 'Status',
      //   displayFcn: (item: any) => item.importPermitIndentDetails.importPermitStatus,
      //   type: 'objstring'
      // },
    ];
  }
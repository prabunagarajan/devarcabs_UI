export class OrderPickUpConfig {

    public static titleSection = {
      list: {
        title: 'dispatch Registration',
        button: {
          text: 'Add dispatch UP WareHouse',
          url: '/supplychainmanagement/warehouse/orderpickup/add'
        }
      },
      add: {
        title: 'Warehouse'
      },
      edit: {
        title: '/supplychainmanagement/warehouse/orderpickup/edit'
  
      },
      view: {
        title: '/supplychainmanagement/warehouse/orderpickup/view'
      }
    };
  
  
  
    public static breadcrumbs = [
      // {
      //   text: 'Warehouse',
      //   url: '/supplychainmanagement/warehouse/orderpickup/list',
      //   hasHref: true
      // },
      // {
      //   text: 'Brand Registration',
      //   url: '/supplychainmanagement/warehouse/orderpickup/list',
      //   hasHref: true
      // }
    ];

//   here we need to change name values. 
//   once api redy integrated those values.

public static pendings = [
  {
      name: 'id',
      displayName: 'bondWarehouse.orderpickupdetails.sno',
      type: 'number'
  },
  {
      name: 'indentDate',
      displayName: 'bondWarehouse.orderpickupdetails.indentDate',
      displayFcn: (item: any) => item.indentDate,
      type: 'date'
  },
  {
      name: 'indentNo',
      displayName: 'bondWarehouse.orderpickupdetails.indentNo',
      displayFcn: (item: any) => item.indentNo,
      type: 'objstring'
  },

  {
      name: 'unitName',
      displayName: 'bondWarehouse.orderpickupdetails.unitName',
      displayFcn: (item: any) => item.unitName,
      type: 'objstring'
  },
  {
      name: 'totCasesRequested',
      displayName: 'bondWarehouse.orderpickupdetails.requestedcases',
     displayFcn: (item: any) => item.totCasesRequested,
      type: 'objstring'
  },
  {
      name: 'totBottlesRequested',
      displayName: 'bondWarehouse.orderpickupdetails.requestedbottles',
      displayFcn: (item: any) => item.totBottlesRequested,
      type: 'objstring'
  },
  {
      name: 'orderPickUpStatus',
      displayName: 'bondWarehouse.orderpickupdetails.status',
     // displayFcn: (item: any) => item.orderPickUpStatus,
      type: 'options',
      badgeColors: {
          PENDING: 'badge-warning',
          DRAFT: 'badge-warning'
      }


  },
];
public static Inprogress = [
  {
      name: 'id',
      displayName: 'bondWarehouse.orderpickupdetails.sno',
      type: 'number'
  },
  {
      name: 'indentDate',
      displayName: 'bondWarehouse.orderpickupdetails.indentDate',
      displayFcn: (item: any) => item.indentDate,
      type: 'date'
  },
  {
      name: 'indentNo',
      displayName: 'bondWarehouse.orderpickupdetails.indentNo',
      displayFcn: (item: any) => item.indentNo,
      type: 'objstring'
  },

  {
      name: 'unitName',
      displayName: 'bondWarehouse.orderpickupdetails.unitName',
      displayFcn: (item: any) => item.unitName,
      type: 'objstring'
  },
  {
      name: 'totCasesRequested',
      displayName: 'bondWarehouse.orderpickupdetails.requestedcases',
     displayFcn: (item: any) => item.totCasesRequested,
      type: 'objstring'
  },
  {
      name: 'totBottlesRequested',
      displayName: 'bondWarehouse.orderpickupdetails.requestedbottles',
      displayFcn: (item: any) => item.totBottlesRequested,
      type: 'objstring'
  },
  {
      name: 'orderPickUpStatus',
      displayName: 'bondWarehouse.orderpickupdetails.status',
      // displayFcn: (item: any) => item.orderPickUpStatus,
      type: 'options',
      badgeColors: {
          INPROGRESS: 'badge-success',
          DRAFT: 'badge-warning'
      }

  },
];
public static completetd = [
  {
      name: 'id',
      displayName: 'bondWarehouse.orderpickupdetails.sno',
      type: 'number'
  },
  {
      name: 'indentDate',
      displayName: 'bondWarehouse.orderpickupdetails.indentDate',
      displayFcn: (item: any) => item.indentDate,
      type: 'date'
  },
  {
      name: 'indentNo',
      displayName: 'bondWarehouse.orderpickupdetails.indentNo',
      displayFcn: (item: any) => item.indentNo,
      type: 'objstring'
  },

  {
      name: 'unitName',
      displayName: 'bondWarehouse.orderpickupdetails.unitName',
      displayFcn: (item: any) => item.unitName,
      type: 'objstring'
  },
  {
      name: 'totCasesRequested',
      displayName: 'bondWarehouse.orderpickupdetails.requestedcases',
      displayFcn: (item: any) => item.totCasesRequested,
      type: 'objstring'
  },
  {
      name: 'totBottlesRequested',
      displayName: 'bondWarehouse.orderpickupdetails.requestedbottles',
      displayFcn: (item: any) => item.totBottlesRequested,
      type: 'objstring'
  },
  {
      name: 'orderPickUpStatus',
      displayName: 'bondWarehouse.orderpickupdetails.status',
//displayFcn: (item: any) => item.orderPickUpStatus,
      type: 'options',
      badgeColors: {
          COMPLETED: 'badge-success',
          DRAFT: 'badge-warning'
      }


  },
];




    // public static columns = [
    //   {
    //     name: 'id',
    //     displayName: '#',
    //     type: 'number'
    //   },
    //   {
    //     name: 'indentDate',
    //     displayName: 'Indent Date',
    //     type: 'date'
    //   },
    //   {
    //     name: 'indentNo',
    //     displayName: 'Indent Number',
    //     type: 'string'
    //   },
    //   {
    //     name: 'unitName',
    //     displayName: 'Unit Name',
    //     type: 'string'
    //   },
    //   {
    //     name: 'totCasesRequested',
    //     displayName: 'Requested Cases',
    //     type: 'string'
    //   },  
    // {
    //     name: 'totBottlesRequested',
    //     displayName: 'Requested Bottles',
    //     type: 'string'
    //   },
    //   {
    //     name: 'orderPickUpStatus',
    //     displayName: 'Status',
    //     type: 'string'
    //   },
     
    // ];
  }
export class TransportPassCancelationConfig {

    public static titleSection = {
      list: {
        title: 'dispatch Registration',
        button: {
          text: 'Add dispatch UP WareHouse',
          url: '/supplychainmanagement/warehouse/transportpass/requestfortpcancelation/add'
        }
      },
      add: {
        title: 'Warehouse'
      },
      edit: {
        title: '/supplychainmanagement/warehouse/transportpass/requestfortpcancelation/edit'
  
      },
      view: {
        title: '/supplychainmanagement/warehouse/transportpass/requestfortpcancelation/view'
      }
    };
  
  
  
    public static breadcrumbs = [
      // {
      //   text: 'Warehouse',
      //   url: '/supplychainmanagement/warehouse/transportpass/requestfortpcancelation/list',
      //   hasHref: true
      // },
      // {
      //   text: 'Brand Registration',
      //   url: '/supplychainmanagement/warehouse/transportpass/requestfortpcancelation/list',
      //   hasHref: true
      // }
    ];

//   here we need to change name values. 
//   once api redy integrated those values.
    public static columns = [
      {
        name: 'id',
        displayName: 'bondWarehouse.TransportPassCancellation.sno',
        type: 'number'
      },
      {
        name: 'applicationNumber',
        displayName: 'bondWarehouse.TransportPassCancellation.applicationid',
        // displayFcn: (item: any) => item.contents[0].transportNo,     Application ID
        type: 'string'
      },
      // {
      //   name: 'transportPassType',
      //   displayName: 'Transport Pass Type',
      //   type: 'string'
      // },
      {
        name: 'transportPassDetails?.transportNo',
        displayName: 'bondWarehouse.TransportPassCancellation.transportpassno',
        // Transport Pass  Number
        displayFcn: (item: any) => item.transportPassDetails.transportNo,
        type: 'objstring'
      },
      {
        name: 'applicationDate',
        displayName: 'bondWarehouse.TransportPassCancellation.applicationdate',
        // Application Date
        type: 'date'
      },  
    {
        name: 'premisesTypeValue',
        displayName: 'bondWarehouse.TransportPassCancellation.premisestype',
        // Premises Type
        //displayFcn: (item: any) => item.importPermitIndentDetails.unitName,
        type: 'string'
      },
      {
        name: 'requestType',
        displayName: 'bondWarehouse.TransportPassCancellation.requesttype',
        // Request Type
        type: 'string'
      },
      {
        name: 'status',
        displayName: 'bondWarehouse.common.status',
        type: 'string',
        badgeColors: {
          SENDBACK: 'badge-warning',
          DRAFT: 'badge-warning'
      }
      },
    ];

    // Apprve
    public static Approved = [
      {
        name: 'id',
        displayName: 'bondWarehouse.TransportPassCancellation.sno',
        type: 'number'
      },
      {
        name: 'applicationNumber',
        displayName: 'bondWarehouse.TransportPassCancellation.applicationid',
        type: 'string'
      },
      // {
      //   name: 'transportPassType',
      //   displayName: 'Transport Pass Type',
      //   type: 'string'
      // },
      {
        name: 'transportPassDetails?.transportNo',
        displayName: 'bondWarehouse.TransportPassCancellation.transportpassno',
        displayFcn: (item: any) => item.transportPassDetails.transportNo,
        type: 'objstring'
      },
      {
        name: 'applicationDate',
        displayName: 'bondWarehouse.TransportPassCancellation.applicationdate',
        type: 'date'
      },  
    {
        name: 'premisesTypeValue',
        displayName: 'bondWarehouse.TransportPassCancellation.premisestype',
        type: 'string'
      },
      {
        name: 'requestType',
        displayName: 'bondWarehouse.TransportPassCancellation.requesttype',
        type: 'string'
      },
      {
        name: 'status',
        displayName: 'bondWarehouse.common.status',
        type: 'string',
        badgeColors: {
          SENDBACK: 'badge-warning',
          DRAFT: 'badge-warning'
      }
      },
    
    ];

    // revert Back

    public static RevertBack = [
      {
        name: 'id',
        displayName: 'bondWarehouse.TransportPassCancellation.sno',
        type: 'number'
      },
      {
        name: 'applicationNumber',
        displayName: 'bondWarehouse.TransportPassCancellation.applicationid',
        type: 'string'
      },
      // {
      //   name: 'transportPassType',
      //   displayName: 'Transport Pass Type',
      //   type: 'string'
      // },
      {
        name: 'transportPassDetails?.transportNo',
        displayName: 'bondWarehouse.TransportPassCancellation.transportpassno',
        displayFcn: (item: any) => item.transportPassDetails.transportNo,
        type: 'objstring'
      },
      {
        name: 'applicationDate',
        displayName: 'bondWarehouse.TransportPassCancellation.applicationdate',
        type: 'date'
      },  
    {
        name: 'premisesTypeValue',
        displayName: 'bondWarehouse.TransportPassCancellation.premisestype',
        type: 'string'
      },
      {
        name: 'requestType',
        displayName: 'bondWarehouse.TransportPassCancellation.requesttype',
        type: 'string'
      },
      {
        name: 'status',
        displayName: 'bondWarehouse.common.status',
        type: 'string',
        badgeColors: {
          SENDBACK: 'badge-warning',
          DRAFT: 'badge-warning'
      }
      },
    
    ];
    
  }
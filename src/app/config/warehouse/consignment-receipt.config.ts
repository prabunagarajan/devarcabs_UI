    export class ConsignmentReceiptConfig {

        public static titleSection = {
          list: {
            title: 'consignementreceipt Registration',
            button: {
              text: 'Add consignementreceipt UP WareHouse',
              url: '/supplychainmanagement/warehouse/consignementreceipt/add'
            }
          },
          add: {
            title: 'Warehouse'
          },
          edit: {
            title: '/supplychainmanagement/warehouse/consignementreceipt/edit'
      
          },
          view: {
            title: '/supplychainmanagement/warehouse/consignementreceipt/view'
          }
        };
      
      
      
        public static breadcrumbs = [
          // {
          //   text: 'Warehouse',
          //   url: '/supplychainmanagement/warehouse/consignementreceipt/list',
          //   hasHref: true
          // },
          // {
          //   text: 'Brand Registration',
          //   url: '/supplychainmanagement/warehouse/consignementreceipt/list',
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
            name: 'transportPassNo.',
            displayName: 'bondWarehouse.consignementreceipt.tpnumber',
            type: 'string'
          },
          {
            name: 'transportPassNoDate',
            displayName: 'bondWarehouse.consignementreceipt.tpdate',
            type: 'date'
          },
          {
            name: 'permitNumber',
            displayName: 'bondWarehouse.consignementreceipt.permitnuber',
            type: 'string'
          },
          {
            name: 'recievedCases',
            displayName: 'bondWarehouse.consignementreceipt.receivedcases',
            type: 'string'
          },  
        {
            name: 'recievedBottles',
            displayName: 'bondWarehouse.consignementreceipt.receivedbottles',
            //displayFcn: (item: any) => item.importPermitIndentDetails.unitName,
            type: 'number'
          },
          {
            name: 'recievedBy',
            displayName: 'bondWarehouse.consignementreceipt.receivedby',
            type: 'string'
          },
          {
            name: 'recievedDate',
            displayName: 'bondWarehouse.consignementreceipt.receiveddate',
            type: 'string'
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
export class Bottlingprodplannew {

    // public static titleSection = {
    //   list: {
    //     title: 'dispatch Registration',
    //     button: {
    //       text: 'Add dispatch UP WareHouse',
    //       url: '/supplychainmanagement/warehouse/dispatch/add'
    //     }
    //   },
    //   add: {
    //     title: 'Warehouse'
    //   },
    //   edit: {
    //     title: '/supplychainmanagement/warehouse/dispatch/edit'
  
    //   },
    //   view: {
    //     title: '/supplychainmanagement/warehouse/dispatch/view'
    //   }
    // };
  
  
  
    // public static breadcrumbs = [
      // {
      //   text: 'Warehouse',
      //   url: '/supplychainmanagement/warehouse/importpermit/list',
      //   hasHref: true
      // },
      // {
      //   text: 'Brand Registration',
      //   url: '/supplychainmanagement/warehouse/importpermit/list',
      //   hasHref: true
      // }
    // ];

//   here we need to change name values. 
//   once api redy integrated those values.
    public static columns = [
       
        {
            name: "id",
            displayName: "parentunit.bottlingProduction.sno",
            type: "number",
        },
        {
            name: "dateOfPackaging",
            displayName: 'parentunit.bottlingProduction.dateofpackaging',
            type: "date",
            dateFormat: "dd/MM/yyyy"
        },
        {
            name: "bottlingPlanId",
            displayName: 'parentunit.bottlingProduction.bottlingplanid',
            type: "string",
        },
        {
            name: "brandValue",
            displayName: 'parentunit.bottlingProduction.brandname',
            type: "string",
        },
        {
            name: "codeTypeValue",
            displayName:'parentunit.bottlingProduction.codetype',
            type: "string",
            // dateFormat: "dd-MMM-yyyy",
        },
        {
            name: "noOfCases",
            displayName:'parentunit.bottlingProduction.noofcases',
            type: "string",
            // dateFormat: "dd-MMM-yyyy",
        },
        {
          name: "statusDesc",
          displayName:'parentunit.bottlingProduction.status',
        //   type: "string",
          type: 'options',
          badgeColors: {
            Cancelled: 'badge-warning',
            'In Progress':'badge-secondary',
            Draft: 'badge-primary',
            Approved:'badge-success',
            Rejected:'badge-danger',
            'Cancellation InProgress':'badge-warning',
            Clarification:'badge-warning'
          }
      },
        
        ];
  }
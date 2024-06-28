export class BrandLabelOverViewConfig {

    public static titleSection = {
      list: {
        title: 'dispatch Registration',
        button: {
          text: 'Add dispatch UP WareHouse',
          url: '/supplychainmanagement/warehouse/dispatch/add'
        }
      },
      add: {
        title: 'Warehouse'
      },
      edit: {
        title: '/supplychainmanagement/warehouse/dispatch/edit'
  
      },
      view: {
        title: '/supplychainmanagement/warehouse/dispatch/view'
      }
    };
  
  
  
    public static breadcrumbs = [
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
    ];

//   here we need to change name values. 
//   once api redy integrated those values.
    public static columns = [
       
        {
            name: "id",
            displayName: "#",
            type: "number",
        },
        {
            name: "brandValue",
            displayName: 'parentunit.brandlabeloverview.brandname',
            type: "string",
        },
        {
            name: "liquorTypeValue",
            displayName: 'parentunit.brandlabeloverview.liquortype',
            type: "string",
        },
        {
            name: "subLiquorTypeValue",
            displayName: 'parentunit.brandlabeloverview.subliquortype',
            type: "string",
        },
        {
            name: "validityOfReg",
            displayName:'parentunit.brandlabeloverview.validityofreg',
            type: "string",
            // dateFormat: "dd-MMM-yyyy",
        },
        {
          name: "labelStatusDesc",
          displayName:'parentunit.brandlabeloverview.status',
          // type: "string",
          type: 'options',
          badgeColors: {
            SUBMITTED: 'badge-success',
            'In Progress':'badge-secondary',
            Clarification: 'badge-primary',
            Approved:'badge-warning',
            Rejected:'badge-danger'
          }
      },
        
        ];
  }
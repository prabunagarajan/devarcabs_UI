export class Mf9fortnightconfig {

    // public static titleSection = {
    //   list: {
    //       title: 'master.district.list',
    //       button: {
    //           text: 'master.district.adddistrict',
    //           url: '/location/district/add'
    //       }
    //   },
    //   add: {
    //       title: 'master.district.list'
    //   },
    //   edit: {
    //       title: 'master.district.list'
    //   },
    //   view: {
    //       title: 'master.district.list'
    //   }
    // };
  
    // public static breadcrumbs = [
    //   {
    //     text: 'master.common.masters',
    //     url: '/location/district/list',
    //     hasHref: true
    //   },
    //   {
    //     text: 'master.common.location',
    //     url: '/location/district/list',
    //     hasHref: true
    //   },
    //   {
    //       text: 'master.common.district',
    //       url: '/location/district/list',
    //       hasHref: true
    //     },
    //   // {
    //   //   text: 'master.common.list',
    //   //   hasHref: false
    //   // }
    // ];

    public static columns = [
      // {
      //   name: 'id',
      //   displayName: '#',
      //   type: 'number'
      // },
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'fortnightStartDate',
        displayName: 'Start Date',
        type: 'date',
        dateFormat: "dd-MMM-yyyy",
      },
      {
        name: 'fortnightEndDate',
        displayName: 'End Data',
        type: 'date',
        dateFormat: "dd-MMM-yyyy",
      },
      {
        name: "productName",
        displayName: "Product Type",
        type: "string",
      },
      {
        name: "gradeName",
        displayName: "Grade",
        type: "string",
      },
      {
        name: "qty",
        displayName: "Quantity",
        type: "string",
      },
      {
        name: 'status',
        displayName: 'sugarmill.common.status', 
        type: 'options',
        badgeColors: {
          SUBMITTED: 'badge-success',
          INITIATED:'badge-warning',
          APPROVED: "badge-primary",
          REJECTED: "badge-danger",
          DRAFT: "badge-warning",
        }
      },
    
    
    ];
  }
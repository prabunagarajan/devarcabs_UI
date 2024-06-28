export class WholesaleIndentConfig {

    public static titleSection = {
    //   list: {
    //       title: 'Stock Availability Wholesale',
    //       button: {
    //           text: 'master.applicationstatus.addapplicantstatus',
    //           url: '/master/applicationstatus/add'
    //       }
    //   },
    //   add: {
    //       title: 'master.applicationstatus.applicationstatus'
    //   },
    //   edit: {
    //       title: 'master.applicationstatus.applicationstatus'
    //   },
    //   view: {
    //       title: 'master.applicationstatus.applicationstatus'
    //   }
    };
  
    public static breadcrumbs = [
      {
        text: 'Supply Chain Management',
        url: '/supplychainmanagement/retail/indentrequest',
        hasHref: true
      },
      {
          text: 'Retail',
          url: '/supplychainmanagement/retail/indentrequeste',
          hasHref: true
        },
        {
            text: 'Indent Request',
            url: '/supplychainmanagement/retail/indentrequeste',
            hasHref: true
          },
      {
        text: 'Wholesale List',
        url: '/supplychainmanagement/retail/indentrequeste',
        hasHref: false
      }
    ];

    public static columns = [
        {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'star',
        displayName: 'Star',
        type: 'string'
      },
      {
        name: 'wholesaleType',
        displayName: 'Wholesale Type',
        type: 'string'
      },
      {
        name: 'wholesaleName',
        displayName: 'Wholesale Name',
        type: 'string'
      },
    ];
  }
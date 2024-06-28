export class LiquorCategoryReportsConfig {

    public static titleSection = {
      list: {
          title: 'Liquor Category Report',
      },
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
          text: 'Retail',
          url: '/supplychainmanagement/retail/reports/liquorcategoryreport',
          hasHref: true
        },
      {
        text: 'Reports',
        url: '/supplychainmanagement/retail/reports/liquorcategoryreport',
        hasHref: true
      },
      {
        text: 'Liquor Category Report',
        url: '/supplychainmanagement/retail/reports/liquorcategoryreport',
        hasHref: true
      }
    ];

    public static columns = [
        {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'brandName',
        displayName: 'retail.liquorcategory.brandname',
        type: 'string',
      },
      {
        name: 'liquorType',
        displayName: 'retail.liquorcategory.liquortype',
        type: 'string'
      },
      {
        name: 'size',
        displayName: 'retail.liquorcategory.size',
        type: 'string'
      },
      {
        name: 'noOfCases',
        displayName: 'retail.liquorcategory.numberofcases',
        type: 'string'
      },
      {
        name: 'noOfBottles',
        displayName: 'retail.liquorcategory.numberofbottols',
        type: 'string'
      },
    ];
  }
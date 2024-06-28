export class Form25APart4Config {

    public static titleSection = {
      list: {
          title: 'Part 4 - Beer of Indian Manufacture',
          button: {
              text: 'Add Part 4 - Beer of Indian Manufacture',
              url: '/supplychainmanagement/retail/formfl25-a/part4/add'
          }
      },
    };
  
    public static breadcrumbs = [
      {
        text: 'retail.common.supplychainmanagement',
        url: '/supplychainmanagement/retail/formfl25-a/part4/list',
        hasHref: true
      },
      {
        text: 'retail.common.retail',
        url: '/supplychainmanagement/retail/formfl25-a/part4/list',
        hasHref: true
      },
      {
        text: 'FL 25-A',
        url: '/supplychainmanagement/retail/formfl25-a/part4/list',
        hasHref: true
      },
      {
        text: 'Part 4',
        url: '/supplychainmanagement/retail/formfl25-a/part4/list',
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
        name: 'date',
        displayName: 'Date',
        type: 'string'
      },
      {
        name: 'sales',
        displayName: 'Sales',
        type: 'string'
      },
      {
        name: 'whiskyOpeningBalance',
        displayName: 'Opening Sale',
        type: 'string'
      },
      {
        name: 'whiskyClosingBalance',
        displayName: 'Closing Sale',
        type: 'string'
      },
      {
        name: 'beerOpeningBalance',
        displayName: 'Opening Sale',
        type: 'string'
      },
      {
        name: 'beerClosingBalance',
        displayName: 'Closing Sale',
        type: 'string'
      },
      {
        name: 'status',
        displayName: 'master.common.status',
        type: 'options',
        badgeColors: {
          Success: 'badge-success',
          Drafted: 'badge-warning'
        }
      }
    ];
  }
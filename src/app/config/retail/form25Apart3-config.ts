export class Form25APart3Config {

    public static titleSection = {
      list: {
          title: 'Part 3 - Account of Sale',
          button: {
              text: 'Add Part 3 - Account of Sale',
              url: '/supplychainmanagement/retail/formfl25-a/part3/add'
          }
      },
    };
  
    public static breadcrumbs = [
      {
        text: 'retail.common.supplychainmanagement',
        url: '/supplychainmanagement/retail/formfl25-a/part3/list',
        hasHref: true
      },
      {
        text: 'retail.common.retail',
        url: '/supplychainmanagement/retail/formfl25-a/part3/list',
        hasHref: true
      },
      {
        text: 'FL 25-A',
        url: '/supplychainmanagement/retail/formfl25-a/part3/list',
        hasHref: true
      },
      {
        text: 'Part 3',
        url: '/supplychainmanagement/retail/formfl25-a/part3/list',
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
        name: 'whiskyIndianManufracture',
        displayName: 'Whisky, Brandy, Gin, Rum, of India Manufacture(in Quarts)',
        type: 'string'
      },
      {
        name: 'beerIndianManufracture',
        displayName: 'Beer of Indian Manufacture (in Quarts)	',
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
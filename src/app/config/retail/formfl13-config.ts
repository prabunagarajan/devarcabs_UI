export class FormFL13Config {

    public static titleSection = {
      list: {
          title: 'FL 13',
          button: {
              text: 'retail.common.add',
              url: '/supplychainmanagement/retail/formfl13/add'
          }
      },
    };
  
    public static breadcrumbs = [
      {
        text: 'retail.common.supplychainmanagement',
        url: '/supplychainmanagement/retail/formfl13/list',
        hasHref: true
      },
      {
        text: 'retail.common.retail',
        url: '/supplychainmanagement/retail/formfl13/list',
        hasHref: true
      },
      {
        text: 'FL 13',
        url: '/supplychainmanagement/retail/formfl13/list',
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
        name: 'licenseeName',
        displayName: 'retail.formfl13.licenseename',
        type: 'string'
      },
      {
        name: 'licenseType',
        displayName: 'retail.formfl13.licensetype',
        type: 'string'
      },
      {
        name: 'type',
        displayName: 'retail.formfl13.type',
        type: 'string'
      },
      {
        name: 'licenseFeeonSpirit',
        displayName: 'retail.formfl13.feeonspirit',
        type: 'string'
      },
      {
        name: 'licenseFeeonBeer',
        displayName: 'retail.formfl13.feeonbeer',
        type: 'string',
      },
      {
        name: 'totalAmount',
        displayName: 'retail.formfl13.licensefee',
        type: 'string'
      },
    ];
  }
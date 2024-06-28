export class FormFL24Config {

    public static titleSection = {
      list: {
          title: 'FL 24',
          button: {
              text: 'retail.common.add',
              url: '/supplychainmanagement/retail/formfl24/add'
          }
      },
    };
  
    public static breadcrumbs = [
      {
        text: 'retail.common.supplychainmanagement',
        url: '/supplychainmanagement/retail/formfl24/list',
        hasHref: true
      },
      {
        text: 'retail.common.retail',
        url: '/supplychainmanagement/retail/formfl24/list',
        hasHref: true
      },
      {
        text: 'FL 24',
        url: '/supplychainmanagement/retail/formfl24/list',
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
        name: 'permitNo',
        displayName: 'retail.formfl24.permitno',
        type: 'string'
      },
      {
        name: 'permitDate',
        displayName: 'retail.formfl24.permitdate',
        type: 'string'
      },
      {
        name: 'importerName',
        displayName: 'retail.formfl24.importername',
        type: 'string'
      },
      {
        name: 'amount1',
        displayName: 'retail.formfl24.dutypaid',
        type: 'string'
      },
      {
        name: 'amount2',
        displayName: 'retail.formfl24.permitfeepaid',
        type: 'string',
      },
      {
        name: 'remarks',
        displayName: 'retail.common.remarks',
        type: 'string'
      },
    ];
  }
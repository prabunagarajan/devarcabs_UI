export class FormFl25BConfig {

    public static titleSection = {
      list: {
        title: 'FL 25-B',
        button: {
          text: 'Add FL 25-B',
          url: '/supplychainmanagement/retail/formfl25-b/add'
        }
      },
      add: {
        title: 'FL 25-B'
      },
      edit: {
        title: 'FL 25-B'
      },
      view: {
        title: 'FL 25-B'
      }
    };
    public static breadcrumbs = [
      {
        text: 'retail.common.supplychainmanagement',
        url: '/supplychainmanagement/retail/formfl25-b/list',
        hasHref: true
      },
      {
        text: 'retail.common.retail',
        url: '/supplychainmanagement/retail/formfl25-b/list',
        hasHref: true
      },
      {
        text: 'FL 25-B',
        url: '/supplychainmanagement/retail/formfl25-b/list',
        hasHref: true
      },
      {
        text: 'retail.indentrequest.list',
        url: '/supplychainmanagement/retail/formfl25-b/list',
        hasHref: true
      },
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
        name: 'rationCardHolder',
        displayName: 'Name of Ration Card Holder',
        type: 'string'
      },
      {
        name: 'rationCardNo',
        displayName: 'Ration Card No.',
        type: 'string'
      },
      {
        name: 'quantitySold',
        displayName: 'Quantity Sold (in Quarts)',
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
      },
    ];
  }






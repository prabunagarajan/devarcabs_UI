export class FormFL30Config {

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
        name: 'licenseNo',
        displayName: 'License No',
        type: 'string'
      },
      {
        name: 'passNumber',
        displayName: 'Pass Number',
        type: 'string'
      },
      {
        name: 'issueDate',
        displayName: 'Issue Date',
        type: 'string'
      },
      {
        name: 'quantityOfDenaturedSpirit',
        displayName: 'Quantity of Denatured Spirit Issued in Bulk Gallons',
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
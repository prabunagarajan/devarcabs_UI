export class FormFl28Config {

    public static titleSection = {
      list: {
        title: 'retail.indentrequest.list',
        button: {
          text: 'retail.indentrequest.add',
          url: '/supplychainmanagement/retail/indentrequest/product/1'
        }
      },
      add: {
        title: 'retail.indentrequest.list'
      },
      edit: {
        title: 'retail.indentrequest.list'
      },
      view: {
        title: 'retail.indentrequest.list'
      }
    };
    public static breadcrumbs = [
      {
        text: 'retail.common.supplychainmanagement',
        url: '/supplychainmanagement/retail/indentrequest',
        hasHref: true
      },
      {
        text: 'retail.common.retail',
        url: '/supplychainmanagement/retail/indentrequest',
        hasHref: true
      },
      {
        text: 'retail.indentrequest.list',
        url: '/supplychainmanagement/retail/indentrequest',
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
        name: 'applicationName',
        displayName: 'Applicant Name',
        type: 'string'
      },
      {
        name: 'distillery',
        displayName: 'Distillery/Firm Name',
        type: 'string'
      },
      {
        name: 'licenseNo',
        displayName: 'License No',
        type: 'string'
      },
      {
        name: 'paidPermitFee',
        displayName: 'Permit Fee Paid',
        type: 'string'
      },
      {
        name: 'rate',
        displayName: 'Rate',
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
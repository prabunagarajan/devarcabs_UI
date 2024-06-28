export class IndentRequestConfig {

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
      name: 'indentNumber',
      displayName: 'retail.indentrequest.number',
      type: 'string'
    },
    {
      name: 'indentDate',
      displayName: 'retail.indentrequest.datetime',
      type: 'date'
    },
    {
      name: 'wholesaleName',
      displayName: 'retail.indentrequest.wholesalename',
      type: 'string'
    },
    {
      name: 'wholesaleType',
      displayName: 'retail.indentrequest.wholesaletype',
      type: 'string'
    },
    {
      name: 'totalCost',
      displayName: 'retail.indentrequest.totalcost',
      type: 'string'
    },
    {
      name: 'amountPaid',
      displayName: 'retail.indentrequest.amountpaid',
      type: 'string'
    },
    {
      name: 'status',
      displayName: 'master.common.status',
      type: 'options',
      //  optionVal: ['Success', 'In-Drafted'],
      badgeColors: {
        Success: 'badge-success',
        Drafted: 'badge-warning'
      }
    },
  ];
}

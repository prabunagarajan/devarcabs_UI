export class AccountPurchaserConfig {

  public static titleSection = {
    list: {
      title: 'Account Purchaser',
      button: {
        text: 'Add Account Purchaser',
        url: '/supplychainmanagement/retail/accountpurchaser/add'
      }
    },
  };

  public static breadcrumbs = [
    {
      text: 'retail.common.supplychainmanagement',
      url: '/supplychainmanagement/retail/accountpurchaser/list',
      hasHref: true
    },
    {
      text: 'retail.common.retail',
      url: '/supplychainmanagement/retail/accountpurchaser/list',
      hasHref: true
    },
    {
      text: 'Daily Abstract of Receipts, Sales and Balance',
      url: '/supplychainmanagement/retail/accountpurchaser/list',
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
      name: 'receiptDate',
      displayName: 'Date of Receipt',
      type: 'string'
    },
    {
      name: 'permitNumber',
      displayName: 'Permit Number',
      type: 'string'
    },
    {
      name: 'name',
      displayName: 'Name',
      type: 'string'
    },
    {
      name: 'address',
      displayName: 'Address of the Firm for Whom Received',
      type: 'string'
    },
    {
      name: 'licenseNo',
      displayName: 'License No of the Firm',
      type: 'string',
    }
  ];
}
export class DailyAbstractConfig {

  public static titleSection = {
    list: {
      title: 'Daily Abstract of Receipts, Sales and Balance',
      button: {
        text: 'Add Daily Abstract of Receipts, Sales and Balance',
        url: '/supplychainmanagement/retail/dailyabstract/add'
      }
    },
  };

  public static breadcrumbs = [
    {
      text: 'retail.common.supplychainmanagement',
      url: '/supplychainmanagement/retail/dailyabstract/list',
      hasHref: true
    },
    {
      text: 'retail.common.retail',
      url: '/supplychainmanagement/retail/dailyabstract/list',
      hasHref: true
    },
    {
      text: 'Daily Abstract of Receipts, Sales and Balance',
      url: '/supplychainmanagement/retail/dailyabstract/list',
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
      displayName: 'retail.common.date',
      type: 'string'
    },
    {
      name: 'closingBalanceWBGRForeignManufracturer',
      displayName: 'Closing Balance - Whisky, Brandy, Gin & Rum of Foreign Manufacturer (in ML)	',
      type: 'string'
    },
    {
      name: 'closingBalanceWBGRIndianManufracturer',
      displayName: 'Closing Balance - Whisky, Brandy, Gin & Rum of Indian Manufacturer (in ML)',
      type: 'string'
    },
    {
      name: 'closingBalanceOtherSpirits1',
      displayName: 'Closing Balance - Other Spirits & Liquors',
      type: 'string'
    },
    {
      name: 'closingBalance',
      displayName: 'Closing Balance - Port Sherry, Elaret Champange & Wines of Other Sorts',
      type: 'string',
    },
    {
      name: 'closingBalanceBeerofForeignManufracturer',
      displayName: 'Closing Balance - Beer of Foreign Manufacturer (Including Cider)',
      type: 'string'
    },
    {
      name: 'closingBalanceBeerofIndianManufracturer',
      displayName: 'Closing Balance - Beer of Indian Manufacturer',
      type: 'string'
    },
    {
      name: 'closingBalanceOtherSpirits2',
      displayName: 'Closing Balance - Other Spirits & Liquor',
      type: 'string'
    }
  ];
}

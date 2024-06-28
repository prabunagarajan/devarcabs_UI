export class FormFL25Part3Config {

  public static titleSection = {
    list: {
        title: 'FL 25 - Part3',
        button: {
            text: 'Add FL 25 - Part3',
            url: '/supplychainmanagement/retail/formfl25/part3/add'
        }
    },
  };
  public static breadcrumbs = [
    {
      text: 'Retail',
      url: 'supplychainmanagement/retail/formfl25/part3/list',
      hasHref: true
    },
    {
      text: 'FL 25 - Part2',
      url: 'supplychainmanagement/retail/formfl25/part3/list',
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
      name: 'foreignManufactureQuarts',
      displayName: 'Whisky, Brandy.Gin and Rum of foreign manufacture- quarts',
      type: 'string'
    },
    {
      name: 'indianManufactureQuarts',
      displayName: 'Whisky, Brandy. Gin and Rum of Indian manufacture',
      type: 'string'
    },
    {
      name: 'otherSpritAndLiquorQuarts',
      displayName: 'Other spirit and liquors- quarts',
      type: 'string'
    },
    {
      name: 'wineOfOtherSorts',
      displayName: 'Port sherry, elaret champagne and wine of other sorts- Quarts',
      type: 'string'
    },
    {
      name: 'beerOfForeignManufacture',
      displayName: 'Beer of foreign manufacture (including Cider)- quarts',
      type: 'string'
    },
    {
      name: 'beerOfIndianNanufactureQuarts',
      displayName: 'Beer of Indian manufacture- Quarts',
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
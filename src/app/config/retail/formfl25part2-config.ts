export class FormFL25Part2Config {

    public static titleSection = {
      list: {
          title: 'FL 25 - Part2',
          button: {
              text: 'Add FL 25 - Part2',
              url: '/supplychainmanagement/retail/formfl25/part2/add'
          }
      },
    };
    public static breadcrumbs = [
      {
        text: 'Retail',
        url: 'supplychainmanagement/retail/formfl25/part2/list',
        hasHref: true
      },
      {
        text: 'FL 25 - Part2',
        url: 'supplychainmanagement/retail/formfl25/part2/list',
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
        displayName: 'Licensee Name',
        type: 'string'
      },
      {
        name: 'permitNumber',
        displayName: 'Permit Number',
        type: 'string'
      },
      {
        name: 'foreignLiquorType',
        displayName: 'Foreign liquor Type',
        type: 'string'
      },
      {
        name: 'quarts',
        displayName: 'Quantity Received - Quarts',
        type: 'string'
      },
      {
        name: 'remarks',
        displayName: 'Remarks',
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
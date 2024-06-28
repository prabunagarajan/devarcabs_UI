export class FormFL25Part1Config {

    public static titleSection = {
      list: {
          title: 'FL 25 - Part1',
          button: {
              text: 'Add FL 25 - Part1',
              url: '/supplychainmanagement/retail/formfl25/part1/add'
          }
      },
    };
    public static breadcrumbs = [
      {
        text: 'Retail',
        url: 'supplychainmanagement/retail/formfl25/part1/list',
        hasHref: true
      },
      {
        text: 'FL 25 - Part1',
        url: 'supplychainmanagement/retail/formfl25/part1/list',
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
        name: 'othersDate',
        displayName: 'Date and Time',
        type: 'string'
      },
      {
        name: 'exciseDate',
        displayName: 'Exicse officer inspection date',
        type: 'string'
      },
      {
        name: 'exciseRemarks',
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
export class Form25APart2Config {

    public static titleSection = {
      list: {
          title: 'Part 2',
          button: {
              text: 'Add Part 2',
              url: '/supplychainmanagement/retail/formfl25-a/part2/add'
          }
      },
    };
  
    public static breadcrumbs = [
      {
        text: 'retail.common.supplychainmanagement',
        url: '/supplychainmanagement/retail/formfl25-a/part2/list',
        hasHref: true
      },
      {
        text: 'retail.common.retail',
        url: '/supplychainmanagement/retail/formfl25-a/part2/list',
        hasHref: true
      },
      {
        text: 'FL 25-A',
        url: '/supplychainmanagement/retail/formfl25-a/part2/list',
        hasHref: true
      },
      {
        text: 'Part 2',
        url: '/supplychainmanagement/retail/formfl25-a/part2/list',
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
        displayName: 'Name of Licensee',
        type: 'string'
      },
      {
        name: 'licenseNo',
        displayName: 'License No.',
        type: 'string'
      },
      {
        name: 'receiptAccount',
        displayName: 'Receipt Account',
        type: 'string'
      },
      {
        name: 'importerName',
        displayName: 'Name of the Importer',
        type: 'string'
      },
      {
        name: 'imflType',
        displayName: 'IMFL Type',
        type: 'string'
      },
      {
        name: 'quantityReceived',
        displayName: 'Quantity Received',
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
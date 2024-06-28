export class Form25APart1Config {

  public static titleSection = {
    list: {
      title: 'Part 1- Inspections by Excise and Other Officer',
      button: {
        text: 'Add Part 1- Inspections by Excise and Other Officer',
        url: '/supplychainmanagement/retail/formfl25-a/part1/add'
      }
    },
  };

  public static breadcrumbs = [
    {
      text: 'retail.common.supplychainmanagement',
      url: '/supplychainmanagement/retail/formfl25-a/part1/list',
      hasHref: true
    },
    {
      text: 'retail.common.retail',
      url: '/supplychainmanagement/retail/formfl25-a/part1/list',
      hasHref: true
    },
    {
      text: 'FL 25-A',
      url: '/supplychainmanagement/retail/formfl25-a/part1/list',
      hasHref: true
    },
    {
      text: 'Part 1- Inspections by Excise and Other Officer',
      url: '/supplychainmanagement/retail/formfl25-a/part1/list',
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
      name: 'hourofInspection',
      displayName: 'Hour of Inspection',
      type: 'string'
    },
    {
      name: 'inspectorName',
      displayName: 'Inspector Name',
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
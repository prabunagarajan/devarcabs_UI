export class ZoneConfig {

  public static titleSection = {
    list: {
      title: 'master.zone.list',
      button: {
        text: 'master.zone.add',
        url: '/location/zone/add'
      }
    },
    add: {
      title: 'master.zone.list'
    },
    edit: {
      title: 'master.zone.list'
    },
    view: {
      title: 'master.zone.list'
    }
  };

  public static breadcrumbs = [{
      text: 'master.common.masters',
      url: '/location/zone/list',
      hasHref: true
    },
    {
      text: 'master.common.location',
      url: '/location/zone/list',
      hasHref: true
    },
    {
      text: 'master.common.country',
      url: '/location/zone/list',
      hasHref: true
    }
  ]

  public static columns = [{
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'code',
      displayName: 'master.zone.zoneCode',
      type: 'string'
    },
    {
      name: 'name',
      displayName: 'master.zone.zoneName',
      type: 'string'
    },
    {
      name: 'isActive',
      displayName: 'master.common.status',
      type: 'boolean',
      optionVal: ['Active', 'In-Active']
    }
  ];

}

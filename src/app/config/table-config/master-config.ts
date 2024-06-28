export class LocationConfig {

  public static titleSection = {
    list: {
        title: 'master.common.locationList',
        button: {
            text: 'master.common.addLocation',
            url: '/location/location/add'
        }
    },
    add: {
        title: 'master.common.locationList'
    },
    edit: {
        title: 'master.common.locationList'
    },
    view: {
        title: 'master.common.locationList'
    }
  };

  public static breadcrumbs = [
    {
      text: 'master.common.masters',
      url: '/location/location/list',
      hasHref: true
    },
    {
      text: 'master.common.location',
      url: '/location/location/list',
      hasHref: true
    },
    // {
    //   text: 'master.common.list',
    //   hasHref: false
    // }
  ]

  public static columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    // {
    //   name: 'locationCode',
    //   displayName: 'master.common.code',
    //   type: 'string'
    // },
    {
      name: 'locationCode',
      displayName: 'master.common.shortname',
      type: 'string'
    },
    {
      name: 'locationName',
      displayName: 'master.common.location',
      type: 'string'
    },
    // {
    //   name: 'locationName',
    //   displayName: 'master.common.state',
    //   type: 'string'
    // },
    // {
    //   name: 'locationName',
    //   displayName: 'master.common.country',
    //   type: 'string'
    // },
    {
      name: 'isActive',
      displayName: 'master.common.status',
      type: 'boolean',
      optionVal: ['Active', 'In-Active']
    },
  ];

}

export class CountryConfig {

  public static titleSection = {
    list: {
      title: 'master.country.list',
      button: {
        text: 'master.country.add',
        url: '/location/country/add'
      }
    },
    add: {
      title: 'master.country.list'
    },
    edit: {
      title: 'master.country.list'
    },
    view: {
      title: 'master.country.list'
    }
  };

  public static breadcrumbs = [{
      text: 'master.common.masters',
      url: '/location/country/list',
      hasHref: true
    },
    {
      text: 'master.common.location',
      url: '/location/country/list',
      hasHref: true
    },
    {
      text: 'master.common.country',
      url: '/location/country/list',
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
      displayName: 'master.country.countrycode',
      type: 'string'
    },
    {
      name: 'name',
      displayName: 'master.country.countryname',
      type: 'string'
    },
    {
      name: 'currency',
      displayName: 'master.common.currency',
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

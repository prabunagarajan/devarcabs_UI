export class DistrictConfig {

  public static titleSection = {
    list: {
      title: 'master.district.list',
      button: {
        text: 'master.district.adddistrict',
        url: '/location/district/add'
      }
    },
    add: {
      title: 'master.district.list'
    },
    edit: {
      title: 'master.district.list'
    },
    view: {
      title: 'master.district.list'
    }
  };

  public static breadcrumbs = [{
      text: 'master.common.masters',
      url: '/location/district/list',
      hasHref: true
    },
    {
      text: 'master.common.location',
      url: '/location/district/list',
      hasHref: true
    },
    {
      text: 'master.common.district',
      url: '/location/district/list',
      hasHref: true
    },
  ];

  public static columns = [{
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'districtCode',
      displayName: 'master.common.code',
      type: 'string'
    },
    {
      name: 'districtName',
      displayName: 'master.district.districtname',
      type: 'string'
    },
    {
      name: 'stateName',
      displayName: 'master.common.state',
      type: 'string'
    },
    {
      name: 'countryName',
      displayName: 'master.common.country',
      type: 'string'
    },
    {
      name: 'zoneName',
      displayName: 'master.common.zone',
      type: 'string'
    },
    {
      name: 'isActive',
      displayName: 'master.common.status',
      type: 'boolean',
      optionVal: ['Active', 'In-Active']
    },
  ];
}

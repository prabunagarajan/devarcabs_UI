export class CencuDataOfDistrictsConfig {

  public static titleSection = {
    list: {
        title: 'master.cencusdata.cencusdataofdistrict',
        button: {
            text: 'master.cencusdata.addcencusdata',
            url: '/master/cencusdataofdistricts/add'
        }
    },
    add: {
        title: 'master.cencusdataofdistricts.list'
    },
    edit: {
        title: 'master.cencusdataofdistricts.list'
    },
    view: {
        title: 'master.cencusdataofdistricts.list'
    }
  };

  public static breadcrumbs = [
    {
      text: 'master.common.masters',
      url: '/master/cencusdataofdistricts/list',
      hasHref: true
    },
    {
      text: 'master.cencusdata.cencusdataofdistrict',
      url: '/master/cencusdataofdistricts/list',
      hasHref: true
    },
    // {
    //     text: 'master.entity.list',
    //     url: '/location/entity/list',
    //     hasHref: true
    //   },
      
    // {
    //   text: 'master.common.list',
    //   hasHref: false
    // }
  ];

  public static columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'code',
      displayName: 'master.cencusdata.cencuscode',
      type: 'string'
    },
    {
      name: 'name',
      displayName: 'master.cencusdata.cencusname',
      type: 'string'
    },
    {
      name: 'districtName',
      displayName: 'master.district.districtname',
      type: 'string'
    },
    {
      name: 'censusCount',
      displayName: 'master.cencusdata.cencuscount',
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
export class TalukConfig {

    public static titleSection = {
      list: {
          title: 'master.taluka.list',
          button: {
              text: 'master.taluka.add',
              url: '/location/taluk/add'
          }
      },
      add: {
          title: 'master.taluka.list'
      },
      edit: {
          title: 'master.taluka.list'
      },
      view: {
          title: 'master.taluka.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/location/taluk/list',
        hasHref: true
      },
      {
        text: 'master.common.location',
        url: '/location/taluk/list',
        hasHref: true
      },
      {
          text: 'master.common.taulk',
          url: '/location/taluk/list',
          hasHref: true
        },
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
        name: 'talukaCode',
        displayName: 'master.taluka.talukacode',
        type: 'string'
      },
      {
        name: 'talukaName',
        displayName: 'master.taluka.talukaname',
        type: 'string'
      },
      {
        name: 'districtName',
        displayName: 'master.district.district',
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
        name: 'isActive',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }
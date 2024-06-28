export class BlockConfig {

    public static titleSection = {
      list: {
          title: 'master.block.list',
          button: {
              text: 'master.block.add',
              url: '/location/block/add'
          }
      },
      add: {
          title: 'master.block.list'
      },
      edit: {
          title: 'master.block.list'
      },
      view: {
          title: 'master.block.list'
      }
    };

    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/location/block/list',
        hasHref: true
      },
      {
        text: 'master.common.location',
        url: '/location/block/list',
        hasHref: true
      },
      {
          text: 'master.common.block',
          url: '/location/block/list',
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
        name: 'name',
        displayName: 'master.common.block',
        type: 'string'
      },
      {
        name: 'stateName',
        displayName: 'master.common.state',
        type: 'string'
      },
      {
        name: 'districtName',
        displayName: 'master.district.district',
        type: 'string'
      },
      {
        name: 'active',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }

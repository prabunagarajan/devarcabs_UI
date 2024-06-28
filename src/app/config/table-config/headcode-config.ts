export class HeadcodeConfig {
    public static titleSection = {
      list: {
        title: 'master.headcodeMaster.list',
        button: {
          text: 'master.headcodeMaster.add',
          url: '/master/headcode/add',
        },
      },
      add: {
        title: 'master.headcodeMaster.list',
      },
      edit: {
        title: 'master.headcodeMaster.list',
      },
      view: {
        title: 'master.headcodeMaster.list',
      },
    };

    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/headcode/list',
        hasHref: true,
      },
      {
        text: 'master.headcodeMaster.headcode',
        url: '/master/headcode/list',
        hasHref: true,
      },
    ];

    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number',
      },
      {
        name: 'headCode',
        displayName: 'master.headcodeMaster.code',
        type: 'string',
      },
      {
        name: 'headName',
        displayName: 'master.headcodeMaster.name',
        type: 'string',
      },
      {
        name: 'feeName',
        displayName: 'master.headcodeMaster.feeType',
        type: 'string',
      },
      {
        name: 'isActive',
        displayName: 'master.Status.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active'],
      },
    ];
  }

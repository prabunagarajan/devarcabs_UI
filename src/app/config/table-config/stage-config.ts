export class StageConfig {

    public static titleSection = {
      list: {
          title: 'master.Stage.stage',
          button: {
              text: 'master.Stage.addstage',
              url: '/master/stage/add'
          }
      },
      add: {
          title: 'master.Stage.stage'
      },
      edit: {
          title: 'master.Stage.stage'
      },
      view: {
          title: 'master.Stage.stage'
      }
    };
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/stage/list',
        hasHref: true
      },
      {
        text: 'master.Stage.stage',
        url: '/master/stage/list',
        hasHref: true
      }
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
        displayName: 'master.Stage.stagecode',
        type: 'string'
      },
      {
        name: 'stages',
        displayName: 'master.Stage.stagename',
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
export class GenderConfig {

    public static titleSection = {
      list: {
          title: 'master.gender.gender',
          button: {
              text: 'master.gender.addgender',
              url: '/master/gender/add'
          }
      },
      add: {
          title: 'master.gender.gender'
      },
      edit: {
          title: 'master.gender.gender'
      },
      view: {
          title: 'master.gender.gender'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/gender/list',
        hasHref: true
      },
      {
        text: 'master.gender.gender',
        url: '/master/district/list',
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
        name: 'code',
        displayName: 'master.gender.gendercode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.gender.gendername',
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
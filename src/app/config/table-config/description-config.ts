export class DescriptionConfig {

    public static titleSection = {
        list: {
            title: 'master.description.description',
            button: {
                text: 'master.description.add',
                url: '/master/description/add'
            }
        },
        add: {
            title: 'master.description.list'
        },
        edit: {
            title: 'master.description.list'
        },
        view: {
            title: 'master.description.list'
        }
      };
      public static breadcrumbs = [
        {
          text: 'master.common.masters',
          url: '/master/description/list',
          hasHref: true
        },
        {
          text: 'master.description.description',
          url: '/master/description/list',
          hasHref: true
        },
      ];
    
      public static columns = [
        {
          name: 'id',
          displayName: '#',
          type: 'number'
        },
        {
          name: 'code',
          displayName: 'master.description.code',
          type: 'string'
        },
        {
          name: 'name',
          displayName: 'master.description.name',
          type: 'string'
        },
        {
          name: 'feeName',
          displayName: 'master.feetype.feetype',
          type: 'string'
        },
        {
          name: 'headName',
          displayName: 'master.headcodeMaster.headcode',
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
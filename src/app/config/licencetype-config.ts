export class LicenceTypeConfig {

    public static titleSection = {
      list: {
          title: 'master.licencetype.licencetype',
          button: {
              text: 'master.licencetype.addlicencetype',
              url: '/master/licencetype/add'
          }
      },
      add: {
          title: 'master.licencetype.list'
      },
      edit: {
          title: 'master.licencetype.list'
      },
      view: {
          title: 'master.licencetype.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/licencetype/list',
        hasHref: true
      },
      {
        text: 'master.licencetype.licencetype',
        url: '/master/licencetype/list',
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
        displayName: 'master.licencetype.licencetypecode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.licencetype.licencetypename',
        type: 'string'
      },
      {
        name: 'type',
        displayName: 'master.licencetype.liquorcategory',
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
  
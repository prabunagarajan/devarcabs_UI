export class RawMaterialConfig {

    public static titleSection = {
      list: {
          title: 'master.rawmaterial.rawmaterial',
          button: {
              text: 'master.rawmaterial.addrawmaterial',
              url: '/master/rawmaterial/add'
          }
      },
      add: {
          title: 'master.rawmaterial.rawmaterial'
      },
      edit: {
          title: 'master.rawmaterial.rawmaterial'
      },
      view: {
          title: 'master.rawmaterial.rawmaterial'
      }
    };
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: 'master/rawmaterial/list',
        hasHref: true
      },
      {
        text: 'master.rawmaterial.rawmaterial',
        url: 'master/rawmaterial/list',
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
        displayName: 'master.rawmaterial.rawmaterialcode' ,
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.rawmaterial.rawmaterialname',
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
export class MolassesTyperConfig {

    public static titleSection = {
      list: {
          title: 'master.molasseslist.molasseslist',
          button: {
              text: 'master.molasseslist.addmolassestype',
              url: '/master/molasses-type/add'
          }
      },
      add: {
          title: 'master.molasseslist.list'
      },
      edit: {
          title: 'master.molasseslist.list'
      },
      view: {
          title: 'master.molasseslist.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/molasseslist/list',
        hasHref: true
      },
      {
        text: 'master.molasseslist.molassestype',
        url: '/master/molasseslist/list',
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
        displayName: 'master.molasseslist.molassestypecode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.molasseslist.molassesname',
        type: 'string'
      },
      {
        name: 'minTrs',
        displayName: 'master.molasseslist.mintrs(%)',
        type: 'string'
      },
      {
        name: 'maxTrs',
        displayName: 'master.molasseslist.maxtrs(%)',
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
  
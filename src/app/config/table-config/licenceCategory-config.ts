export class LicenceCategoryConfig {

    public static titleSection = {
      list: {
          title: 'master.licencecategory.licensecategory',
          button: {
              text: 'master.licencecategory.addlicensecategory',
              url: '/master/licencecategory/add'
          }
      },
      add: {
          title: 'master.licencecategory.licensecategory'
      },
      edit: {
          title: 'master.licencecategory.licensecategory'
      },
      view: {
          title: 'master.licencecategory.licensecategory'
      }
    };
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: 'master/licencecategory/list',
        hasHref: true
      },
      {
        text: 'master.licencecategory.licensecategory',
        url: 'master/licencecategory/list',
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
        displayName: 'master.licencecategory.licensecategorycode' ,
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.licencecategory.licensecategoryname',
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
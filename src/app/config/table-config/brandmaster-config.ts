export class BrandMasterConfig {

    public static titleSection = {
      list: {
          title: 'master.brand.brandlist',
          button: {
              text: 'master.brand.addbrands',
              url: '/master/brandmaster/add'
          }
      },
      add: {
          title: 'master.brandmaster.list'
      },
      edit: {
          title: 'master.brandmaster.list'
      },
      view: {
          title: 'master.brandmaster.list'
      }
    };

    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/brandmaster/list',
        hasHref: true
      },
      {
        text: 'master.brand.brandmaster',
        url: '/master/brandmaster/list',
        hasHref: true
      },
    //   {
    //       text: 'master.common.list',
    //       url: '/master/brandmaster/list',
    //       hasHref: true
    //     },
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
        name: 'brandCode',
        displayName: 'master.brand.brandcode',
        type: 'string'
      },
      {
        name: 'brandName',
        displayName: 'master.brand.brandname',
        type: 'string'
      },
    //   {
    //     //   incase not geting data remove it
    //     name: 'liquortype',
    //     displayName: 'master.liquortype.liquortype',
    //     type: 'string'
    //   },
    //   {
    //     name: 'shortName',
    //     displayName: 'master.common.status',
    //     type: 'string'
    //   },
    //   {
    //     name: 'currency',
    //     displayName: 'master.common.currency',
    //     type: 'string'
    //   },
     {
        name: 'isActive',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];

  }

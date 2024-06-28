export class FileUploadMasterConfig {

    public static titleSection = {
      list: {
          title: 'master.fileupload.licencehead',
          button: {
              text: 'master.fileupload.addlicence',
              url: '/master/licensetemplateupload/add'
          }
      },
      add: {
          title: 'master.fileupload.list'
      },
      edit: {
          title: 'master.fileupload.list'
      },
      view: {
          title: 'master.fileupload.list'
      }
    };

    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/licensetemplateupload/list',
        hasHref: true
      },
      {
        text: 'master.fileupload.licencehead',
        url: '/master/licensetemplateupload/list',
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
        name: 'name',
        displayName: 'master.fileupload.licenseTYpe',
        type: 'string'
      },
      {
        name: 'code',
        displayName: 'master.fileupload.code',
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
    //  {
    //     name: 'isActive',
    //     displayName: 'master.fileupload.status',
    //     type: 'boolean',
    //     optionVal: ['Active', 'In-Active']
    //   },
    ];

  }

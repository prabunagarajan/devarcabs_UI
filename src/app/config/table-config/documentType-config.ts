export class DocumentTypeConfig {

    public static titleSection = {
      list: {
          title: 'master.documenttype.documenttype',
          button: {
              text: 'master.documenttype.adddocumenttype',
              url: '/master/document/add'
          }
      },
      add: {
          title: 'master.documenttype.documenttype'
      },
      edit: {
          title: 'master.documenttype.documenttype'
      },
      view: {
          title: 'master.documenttype.documenttype'
      }
    };
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: 'master/document/list',
        hasHref: true
      },
      {
        text: 'master.documenttype.documenttype',
        url: 'master/document/list',
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
        displayName: 'master.documenttype.documenttypecode' ,
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.documenttype.documenttypename',
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
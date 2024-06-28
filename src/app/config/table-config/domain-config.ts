export class DomainConfig {

    public static titleSection = {
      list: {
          title: 'master.Domain.domainlis',
          button: {
              text: 'master.Domain.adddomain',
              url: '/master/domain/add'
          }
      },
      add: {
          title: 'master.Domain.domainlis'
      },
      edit: {
          title: 'master.Domain.domainlis'
      },
      view: {
          title: 'master.Domain.domainlis'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/domain/list',
        hasHref: true
      },
      {
        text: 'master.Domain.domain',
        url: '/master/domain/list',
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
        displayName: 'master.Domain.domaincode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.Domain.domainname',
        type: 'string'
      },
      {
        name: 'isActive',
        displayName: 'master.Domain.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }
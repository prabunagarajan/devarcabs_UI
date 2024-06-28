export class LabelRegistrationConfig {
  public static titleSection = {
    list: {
        title: 'Outside UP Warehouse-Label Registration',
        button: {
            text: 'Add Outside upwarehouse',
            url: '/supplychainmanagement/warehouse/outupdistlabelreg/add'
        }
    },
    add: {
        title: 'Warehouse'
    },
    edit: {
        title: '/supplychainmanagement/warehouse/outupdistlabelreg/edit'
    },
    view: {
        title: '/supplychainmanagement/warehouse/outupdistlabelreg/view'
    }
  };
  public static breadcrumbs = [
    // {
    //   text: 'Wholesale',
    //   url: '/wholesale/outupdistlabelreg/list',
    //   hasHref: true
    // },
    // {
    //   text: 'Indent Request',
    //   url: '/wholesale/outupdistlabelreg/list',
    //   hasHref: true
    // },
    // {
    //     text: 'List',
    //     url: '/wholesale/outupdistlabelreg/list',
    //     hasHref: true
    //   },
  ]
    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'modifiedDate',
        displayName: 'Application Date',
        type: 'date'
      },
      {
        name: 'brandRegistration?.applicationNumber',
        displayName: 'Application No',
        displayFcn: (item: any) => item.brandRegistration.applicationNumber,
        type: 'objstring'
      },
      {
        name: 'brandRegistration?.brandRegistrationDetails?.brandDetails?.brandValue',
        displayName: 'Brand Name',
        displayFcn: (item: any) => item.brandRegistration.brandRegistrationDetails.brandDetails.brandValue,
        type: 'objstring'
      },
      {
        name: 'lableRegistrationDetails?.labelDetails[0]?.numberOfLabels',
        displayName: 'Number Of Labes',
        displayFcn: (item: any) => item.lableRegistrationDetails.labelDetails[0].numberOfLabels,
        type: 'objstring'
      },
      {
        name: 'status',
        displayName: 'Status',
        type: 'string'
        // name: 'brandRegistrationDetails?.brandRawMaterials[0]?.status',
        // displayName: 'Status',
        // type: 'options',
        // badgeColors: {
        //   SUBMITTED: 'badge-success',
        //   DRAFT: 'badge-warning'
        // }
      }      
    ];


}
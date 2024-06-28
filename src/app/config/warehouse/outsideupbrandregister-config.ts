import * as moment from 'moment';
  
export class OutsideUpBrandRegisterConfig {

    public static titleSection = {
      list: {
          title: 'Outside UP Distillery-Brand Registration',
          button: {
              text: 'Add Outside UP Distillery',
              url: '/supplychainmanagement/warehouse/outupdistbrandreg/add'
          }
      },
      add: {
          title: 'Warehouse'
      },
      edit: {
          title: 'Warehouse'
      },
      view: {
          title: 'Warehouse'
      }
    };
    public static breadcrumbs = [
      {
        text: 'Warehouse',
        url: '/supplychainmanagement/warehouse/outupdistbrandreg/list',
        hasHref: true
      },
      {
        text: 'Brand Registration',
        url: '/supplychainmanagement/warehouse/outupdistbrandreg/list',
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
        name: 'createdDate',
        displayName: 'Application Date',
        type: 'date'
      },
      {
        name: 'applicationNumber',
        displayName: 'Application No',
        type: 'string'
      },
      {
        name: 'brandRegistrationDetails?.regYear',
        displayName: 'Registration Year ',
        displayFcn: (item: any) => moment(item.brandRegistrationDetails.regYear).format('DD-MM-yyyy'),
        type: 'objstring'
      },
      {
        name: 'brandRegistrationDetails?.brandDetails?.brandValue',
        displayName: 'Brand Name',
        displayFcn: (item: any) => item.brandRegistrationDetails.brandDetails.brandValue,
        type: 'objstring'
      },
      {
        name: 'status',
        displayName: 'Status',
        type: 'options',
        badgeColors: {
          SUBMITTED: 'badge-success',
          DRAFT: 'badge-warning'
        }
      }
    ];
  }
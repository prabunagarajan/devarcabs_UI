export class FormFl35Config {

    public static titleSection = {
      list: {
        title: 'retail.indentrequest.list',
        button: {
          text: 'retail.indentrequest.add',
          url: '/supplychainmanagement/retail/indentrequest/product/1'
        }
      },
      add: {
        title: 'retail.indentrequest.list'
      },
      edit: {
        title: 'retail.indentrequest.list'
      },
      view: {
        title: 'retail.indentrequest.list'
      }
    };
    public static breadcrumbs = [
      {
        text: 'retail.common.supplychainmanagement',
        url: '/supplychainmanagement/retail/indentrequest',
        hasHref: true
      },
      {
        text: 'retail.common.retail',
        url: '/supplychainmanagement/retail/indentrequest',
        hasHref: true
      },
      {
        text: 'retail.indentrequest.list',
        url: '/supplychainmanagement/retail/indentrequest',
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
        name: 'importerName',
        displayName: 'Importer Name',
        type: 'string'
      },
      {
        name: 'street',
        displayName: 'Address of Importer',
        type: 'string'
      },
      {
        name: 'liquorImportedLocation',
        displayName: 'Loction of Liquor to be Imported',
        type: 'string'
      },
      {
        name: 'route',
        displayName: 'Route',
        type: 'string'
      },
      {
        name: 'Consignment',
        displayName: 'Result of Verification of the Consignment on its Arrival',
        type: 'string'
      },
      {
        name: 'remarks',
        displayName: 'Remarks',
        type: 'string'
      }
    ];
  }






export class productTypeConfig {

    public static titleSection = {
      list: {
          title: 'master.producttype.producttype',
          button: {
              text: 'master.producttype.addproducttype',
              url: '/master/product-type/add'
          }
      },
      add: {
          title: 'master.producttype.list'
      },
      edit: {
          title: 'master.producttype.list'
      },
      view: {
          title: 'master.producttype.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/producttype/list',
        hasHref: true
      },
      {
        text: 'master.producttype.producttype',
        url: '/master/producttype/list',
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
        name: 'productCode',
        displayName: 'master.producttype.producttypecode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.producttype.producttypename',
        type: 'string'
      },
      {
        name: 'percentage',
        displayName: 'master.producttype.percentage',
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
  
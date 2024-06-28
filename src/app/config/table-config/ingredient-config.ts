export class IngredientConfig {

    public static titleSection = {
      list: {
          title: 'master.ingredient.ingredient',
          button: {
              text: 'master.ingredient.addingredient',
              url: '/master/ingrediantmaster/add'
          }
      },
      add: {
          title: 'master.ingredient.ingredient'
      },
      edit: {
          title: 'master.ingredient.ingredient'
      },
      view: {
          title: 'master.ingredient.ingredient'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/ingrediantmaster/list',
        hasHref: true
      },
      {
        text: 'master.ingredient.ingredientmaster',
        url: '/master/ingrediantmaster/list',
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
        displayName: 'master.ingredient.ingredientcode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.ingredient.ingredientname',
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
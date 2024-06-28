export class ProductTypeConfig {
  public static titleSection = {
    list: {
      title: "master.producttype.producttype",
      button: {
        text: "master.producttype.addproducttype",
        url: "/inventory/product/add",
      },
    },
    add: {
      title: "master.common.inventory",
    },
    edit: {
      title: "master.common.inventory",
    },
    view: {
      title: "master.common.inventory",
    },
  };

  public static breadcrumbs = [
    {
      text: "master.common.inventory",
      url: "/inventory/product/list",
      hasHref: true,
    },
    {
      text: "master.product.product",
      url: "/inventory/product/list",
      hasHref: true,
    },
  ];

  public static columns = [
    {
      name: "id",
      displayName: "#",
      type: "number",
    },
    {
      name: "code",
      displayName: "master.common.code",
      type: "string",
    },
    {
      name: "name",
      displayName: "master.common.name",
      type: "string",
    },
    // {
    //   name: "category",
    //   displayName: "master.category.category",
    //   type: "string",
    // },
    {
      name: "isActive",
      displayName: "master.common.status",
      type: "boolean",
      optionVal: ["Active", "In-Active"],
    },
  ];
}

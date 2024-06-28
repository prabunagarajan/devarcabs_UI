export class Category {
  id: number;
  code: string;
  name: string;
  isActive: boolean;
}

export class Gst {
  id: number;
  code: string;
  name: string;
  isActive: boolean;
}

export class Item {
  id: number;
  code: string;
  name: string;
  isActive: boolean;
}

export class ProductType {
  id: number;
  code: string;
  name: string;
  category: string;
  subcategory: string;
  isActive: boolean;
}

export class Store {
  id: number;
  code: string;
  name: string;
  isActive: boolean;
}

export class SubCategory {
  id: number;
  code: string;
  name: string;
  categoryName: string;
  isActive: boolean;
}

export class SubProductType {
  id: number;
  code: string;
  name: string;
  category: string;
  subcategory: string;
  product: string;
  isActive: boolean;
}

export class Uom {
  id: number;
  code: string;
  name: string;
  isActive: boolean;
}
export interface ProductModel {
  id: number,
  title: string,
  price: number,
  description: string
}

export interface ProductsModel extends Array<ProductModel> {}
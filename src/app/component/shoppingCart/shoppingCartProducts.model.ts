import { ProductModel } from '../products/products.model';

export interface ShoppingCartProductModel extends ProductModel {
  index: number,
  quantity: number,
  totalPrice: number
}

export interface ShoppingCartProductsModel extends Array<ShoppingCartProductModel> {}
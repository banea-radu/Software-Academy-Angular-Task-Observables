import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductModel } from '../component/products/products.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shoppingCartProduct = new Subject<ProductModel>();

  addProductToShoppingCart(product: ProductModel) {
    this.shoppingCartProduct.next(product);
  }

}

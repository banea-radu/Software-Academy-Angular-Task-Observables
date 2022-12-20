import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartProducts: any = [];
  productsList = new Subject<any>();

  constructor() { }

  getProducts() {
    return this.productsList;
  }

  addProductToCart(product: any) {
    this.cartProducts.push(product);
    this.productsList.next(this.cartProducts);
  }

  totalPrice() :number {
    let totalPrice:number = 0;
    this.cartProducts.map( (product :any) => {
      totalPrice += product.price;
    })
    return totalPrice;
  }

  deleteProduct(cartIndex: number) {
    this.cartProducts.map( (cartProduct:any, index: number) => {
      if(cartIndex === index) {
        this.cartProducts.splice(index, 1);
      }
    })

    this.productsList.next(this.cartProducts);
  }
}

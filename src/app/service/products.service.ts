import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [
    {
      "id":1,
      "title":"Product 1",
      "price":20.00,
      "description":"Product 1 decription."
    },
    {
      "id":2,
      "title":"Product 2",
      "price":10.0,
      "description":"Product 2 description."
    },
    {
      "id":3,
      "title":"Product 3",
      "price":5.00,
      "description":"Product 3 description."
    }
  ]

  // private products = new BehaviorSubject<any>(
  //   [
  //     {
  //       "id":1,
  //       "title":"Product 1",
  //       "price":20.00,
  //       "description":"Product 1 decription."
  //     },
  //     {
  //       "id":2,
  //       "title":"Product 2",
  //       "price":10.0,
  //       "description":"Product 2 description."
  //     },
  //     {
  //       "id":3,
  //       "title":"Product 3",
  //       "price":5.00,
  //       "description":"Product 3 description."
  //     }
  //   ]
  // );

  // constructor() { }

  getProducts(){
    return this.products;
  }

  // getProducts(){
  //   // this.subject = this.productsList;
  //   // console.log(this.products);
  //   return this.products;
  // }
}

import { Injectable } from '@angular/core';

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

  getProducts(){
    return this.products;
  }
}

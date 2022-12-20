import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsList = [
    {
      "id":1,
      "title":"Item 1",
      "price":20.00,
      "description":"Item 1 decription."
    },
    {
      "id":2,
      "title":"Item 2",
      "price":10.0,
      "description":"Item 2 description."
    },
    {
      "id":3,
      "title":"Item 3",
      "price":5.00,
      "description":"Item 3 description."
    }
  ]

  constructor() { }

  getProducts(){
    return this.productsList;
  }

}

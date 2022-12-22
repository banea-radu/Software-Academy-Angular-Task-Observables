import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/service/shoppingCart.service';
import { ProductModel } from '../../model/products.model';
import { ShoppingCartProductModel, ShoppingCartProductsModel } from '../../model/shoppingCartProducts.model';

@Component({
  selector: 'app-shoppingCart',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css']
})
export class ShoppingCartComponent {
  shoppingCartNumberOfProducts: number = 0;
  shoppingCartProducts: ShoppingCartProductsModel = [];
  shoppingCartTotalPrice: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.shoppingCartService.shoppingCartProduct.subscribe( (res: ProductModel) => {
      this.shoppingCartNumberOfProducts++;
      
      const productAlreadyInCart = this.shoppingCartProducts.find( (element: ShoppingCartProductModel) => element.id == res.id);
        if (productAlreadyInCart) {
          productAlreadyInCart.quantity++;
          productAlreadyInCart.totalPrice = productAlreadyInCart.quantity * productAlreadyInCart.price;
        } else {
          this.shoppingCartProducts.push(
            {
              id: res.id,
              title: res.title,
              price: res.price,
              description: res.description,
              index: this.shoppingCartProducts.length,
              quantity: 1,
              totalPrice: res.price
            }
          )
        }

      this.shoppingCartTotalPrice += res.price;
    })
  }

  deleteProduct(shoppingCartIndex: number) {
    this.shoppingCartProducts.map( (cartProduct:any, index: number) => {
      if(shoppingCartIndex === index) {
        this.shoppingCartNumberOfProducts -= this.shoppingCartProducts[index].quantity;
        this.shoppingCartTotalPrice -= this.shoppingCartProducts[index].totalPrice;
        this.shoppingCartProducts.splice(index, 1);
      }
    })
  }
}

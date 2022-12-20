import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/service/shoppingCart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  totalProductsNumber: number = 0;
  products: any = [];
  totalPrice: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.getProducts().subscribe(res => {
      this.totalProductsNumber = res.length;
      this.products = res;
      this.totalPrice = this.shoppingCartService.totalPrice();
    })
  }

  deleteProduct(productIndex: number) {
    this.shoppingCartService.deleteProduct(productIndex);
  }
}

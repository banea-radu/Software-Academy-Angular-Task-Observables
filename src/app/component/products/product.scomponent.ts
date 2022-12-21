import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/service/shoppingCart.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any;

  constructor(private productsList: ProductsService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.products = this.productsList.getProducts();
  }

  addProductToCart(product: any) {
    this.shoppingCartService.addProductToCart(product);
  }

}

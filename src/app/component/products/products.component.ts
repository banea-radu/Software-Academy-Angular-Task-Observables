import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/service/shoppingCart.service';
import { ProductsService } from 'src/app/service/products.service';
import { ProductModel, ProductsModel } from './products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: ProductsModel;

  constructor(private productsService: ProductsService, private shoppingCartService: ShoppingCartService) {
    this.products = this.productsService.getProducts();
  }

  addProductToShoppingCart(product: ProductModel) {
    this.shoppingCartService.addProductToShoppingCart(product);
  }

}

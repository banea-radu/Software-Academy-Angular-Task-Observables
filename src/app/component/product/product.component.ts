import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/service/shoppingCart.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any;

  constructor(private productsList: ProductsService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.products = this.productsList.getProducts();
  }

  addProductToCart(product: any) {
    this.shoppingCartService.addProductToCart(product);
  }

}

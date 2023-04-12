import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ShoppCartService } from 'src/app/services/shopp-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  products: Product[] = [];
  total: string = '0';

  constructor(private shopCartServices: ShoppCartService) { }

  ngOnInit() {
    this.products = this.shopCartServices.products;
    this.updateTotal();
    console.log('Actualizando total')
  };

  deleteProduct(product: Product) {
    this.shopCartServices.deleteProduct(product);
  };

  updateProduct(product: Product, amount: number) {
    this.shopCartServices.updateProduct(product, amount)
    this.updateTotal();
  };

  updateTotal() {
    this.total = this.shopCartServices.getTotal();
  }
};

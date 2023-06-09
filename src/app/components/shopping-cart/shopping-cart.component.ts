import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ShoppCartService } from 'src/app/services/shopp-cart/shopp-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  products: Product[] = [];
  totalProducts: string = ''
  discount: string = '';
  total: string = ''

  constructor(private shopCartServices: ShoppCartService) { }

  ngOnInit() {
    this.products = this.shopCartServices.products;
    this.updateTotalProducts();
    this.updateDiscount();
    this.updateTotal();
  };

  deleteProduct(product: Product) {
    this.shopCartServices.deleteProduct(product);
    this.updateTotalProducts();
    this.updateDiscount();
    this.updateTotal();
  };

  updateProduct(product: Product, amount: number) {
    this.shopCartServices.updateProduct(product, amount)
    this.updateTotalProducts();
  };

  updateTotalProducts() {
    const totalProductObject: Array<any> = this.shopCartServices.getTotal();
    this.totalProducts = totalProductObject[0]
    return this.totalProducts;
  };

  updateDiscount() {
    const discountObject: Array<any> = this.shopCartServices.getTotal();
    this.discount = discountObject[1];
    return this.discount;
  };

  updateTotal() {
    const totalObject: Array<any> = this.shopCartServices.getTotal();
    this.total = totalObject[2];
    return this.total;
  };
};

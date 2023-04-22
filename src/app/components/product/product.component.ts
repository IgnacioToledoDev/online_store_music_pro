import { ShoppCartService } from '../../services/shopp-cart/shopp-cart.service';
import { Product } from '../../interfaces/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private shopCartServices: ShoppCartService) { }
  productTest: Product = {
    _id: '1',
    series: 'nose',
    code: 'nose123',
    name: 'Guitarra',
    brand: 'Sonic',
    amount: 1,
    image: 'Fondo.png',
    description: 'guitarra electrica de muy buena calidad',
    price: 150000
  };

  ngOnInit() {
  }
  addToCart(product: Product) {
    this.shopCartServices.addProduct(product);
  };

  addProductos(product: Product) {
    const listProducts = []
    listProducts.push(product)
    return listProducts;
  }

};

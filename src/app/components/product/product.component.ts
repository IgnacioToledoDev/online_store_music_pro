import { ShoppCartService } from '../../services/shopp-cart/shopp-cart.service';
import { Product } from '../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: Product[] = [];

  constructor(private shopCartServices: ShoppCartService, private productServ: ProductService) { };

  async ngOnInit() {
    await this.productServ.getAllProducts().subscribe(product => {
      this.products = product;
    });
  };

  addToCart(product: Product) {
    this.shopCartServices.addProduct(product);
  };
};

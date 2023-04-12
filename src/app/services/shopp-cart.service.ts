import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppCartService {
  products: Product[] = [];
  constructor() { }

  addProduct(product: Product) {
    this.products.push(product);
    console.log('me han llamado', this.products);
    this.getTotal()
    return this.products;
  };

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    };
    this.getTotal();
    return this.products;
  };

  updateProduct(product: Product, amount: number) {
    product.amount = amount;
    this.getTotal();
    return product;
  }

  getTotal(): string {
    console.log('entrando al obtener el total')
    let total = 0
    for (const producto of this.products) {
      total += producto.price * producto.amount;
    };
    console.log(total);
    const formatted = total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
    return formatted;
  };
};

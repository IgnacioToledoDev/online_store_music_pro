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

  getTotal(): Array<any> {
    console.log('entrando al obtener el total')
    let total: number = 0
    let totalProduct: number = 0
    let discount: number = 0
    for (const producto of this.products) {
      totalProduct += producto.price * producto.amount;
    };
    discount = this.products.length >= 4 ? totalProduct * 0.1 : 0;
    const formattedTotalProduct = totalProduct.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
    const formattedDiscount = discount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
    total = this.products.length >= 4 ? totalProduct - discount : total;
    const formattedTotal = total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
    console.log('total', total, 'formattedTotal', formattedTotal)
    return [formattedTotalProduct, formattedDiscount, formattedTotal];
  };
};

import { Product } from '../../interfaces/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppCartService {
  products: Product[] = [];
  constructor() { }

  /**
   *@memberof ShoppCartService
   * @param product
   * @interface Product
   * @returns Array of Products.
   * @description add product on cart shop if the product includes in the array of Products
   * product.amount + 1 and else product push on array and called to function getTotal().
   * @var index -> is the index for search element in array.
   */
  addProduct(product: Product) {
    if (!this.products.includes(product)) {
      product.amount += 1;
      this.products.push(product);
      this.getTotal();
      return this.products;
    }
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products[index].amount += 1;
    }
    this.getTotal();
    return this.products;
  };

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (product.amount === 1) {
      if (index !== -1) {
        this.products.splice(index, 1);
      };
      this.getTotal();
      return this.products;
    }
    if (product.amount > 1) {
      product.amount -= 1;
      this.getTotal()
      return product;
    }
    return product;
  };
  //VENDEDORES
  updateProduct(product: Product, amount: number) {
    product.amount = amount;
    this.getTotal();
    return product;
  }

  /**
   * @var {total, totalProduct, discount, formattedTotalProduct, formattedDiscount, formattedTotal}
   * @return {Array}  {Array<any>}
   * @memberof ShoppCartService
   * @type {number}
   * @description initalized var total, totalProduct, discount to 0, the start the cycle and totalProduct has equal to
   * operator of price * amount, later if length of array is >= 4 get 10% of totalProduct, formatted the price to local money
   * totalProduct and discount,total is the rest of totalProduct and discount, later formatted the price of total to local money
   * and return array with all formatted money
   */
  getTotal(): Array<any> {
    let total: number = 0
    let totalProduct: number = 0
    let discount: number = 0
    for (const producto of this.products) {
      totalProduct += producto.price * producto.amount;
    };
    discount = this.products.length >= 4 ? totalProduct * 0.1 : 0;
    const formattedTotalProduct = totalProduct.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
    const formattedDiscount = discount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
    total = this.products.length >= 4 ? totalProduct - discount : totalProduct;
    const formattedTotal = total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
    return [formattedTotalProduct, formattedDiscount, formattedTotal];
  };
};

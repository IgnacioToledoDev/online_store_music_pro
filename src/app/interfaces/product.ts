export interface Product {
  _id: string,
  series: string,
  code: string,
  name: string,
  brand: string,
  image: string,
  description: string,
  amount: number,
  price: number,
};

export interface soldProduct {
  _id: string,
  products: Product[],
  dateSold: Date,
  priceTotal: number,
};

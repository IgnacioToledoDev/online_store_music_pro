import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = "http://localhost:8080/api"
  constructor(private http: HttpClient) { };

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.url}/products`);
  }

  getProductByID(id: string): Observable<any> {
    return this.http.get(`${this.url}/product/${id}`);
  };

  postProduct(product: object): Observable<any> {
    return this.http.post(`${this.url}/products`, product);
  };

  updateProduct(id: string, product: Product): Observable<any> {
    return this.http.put(`${this.url}/update-product/${id}`, product);
  };

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.url}/delete-product/${id}`);
  };
};

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

import { Category } from '../site-framework/category';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public httpClient: HttpClient) { }


  createProduct(productBody): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(productUrl, productBody) // return observable
  }

  getCategories(): Observable<Category>{
    const categoriesUrl = "http://localhost:3000/categories";
    return this.httpClient.get<Category>(categoriesUrl)
  }

  getAllProducts(): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(productUrl) // return observable
  }

  updateProduct(productId, productBody): Observable<Product>{
    const productUrl = 'http://localhost:3000/product'+productId;
    return this.httpClient.put<Product>(productUrl, productBody) // return observable
  }

  viewProduct(productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/productS/'+productId;
    return this.httpClient.get<Product>(productUrl) // return observable
  }

  deleteProduct(productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/product'+productId;
    return this.httpClient.delete<Product>(productUrl) // return observable
  }

  searchCategoryProduct(categoryId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products?categoryId=' + categoryId;
    return this.httpClient.get<Product>(productUrl) // return observable
  }

  searchDateProduct(dateParam): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/date='+dateParam;
    return this.httpClient.get<Product>(productUrl) // return observable
  }


}

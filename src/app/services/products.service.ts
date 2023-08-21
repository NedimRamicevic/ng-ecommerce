import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) { }
  
  getProducts(){
    return this.httpClient.get(this.url);
  
  }
}

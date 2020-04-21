import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products') as Observable<Product[]>;
  }

  addProduct(form: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products', form) as Observable<Product>;
  }
}

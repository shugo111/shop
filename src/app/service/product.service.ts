import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../product';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: string = '/assets/product.json';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }
  getProduct(name: string) {
    var data = this.http.get<IProduct[]>(this.url);
    return data.pipe(map((x) => x.find((y: IProduct) => y.name === name)));
  }
}

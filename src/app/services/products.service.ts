import { Injectable } from '@angular/core';
import { Product } from 'src/models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public constructor(private httpClient: HttpClient) { }

  public getAllProducts(): Product[] {
    const arr: Product[] = [];
    arr.push(new Product(1, 'Pizza + Drink + Icecream', 69.9, 100));
    arr.push(new Product(2, '2 Litter buttle ', 4.99, 100));
    arr.push(new Product(3, 'Mambo Jambo Coffee ', 8.99, 50));
    return arr;
  }


  public getAllProductsAsync1(successCallback, failureCallback): void {
    setTimeout(() => {
      try {
        const arr: Product[] = [];
        arr.push(new Product(1, 'Pizza + Drink + Icecream', 69.9, 100));
        arr.push(new Product(2, '2 Litter buttle ', 4.99, 100));
        arr.push(new Product(3, 'Mambo Jambo Coffee ', 8.99, 50));
        successCallback(arr);
      } catch (err) {
        failureCallback(err);
      }
    }, 3000);
  }

  public getAllProductsAsync2(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const arr: Product[] = [];
          arr.push(new Product(1, 'Pizza + Drink + Icecream', 69.9, 100));
          arr.push(new Product(2, '2 Litter buttle ', 4.99, 100));
          arr.push(new Product(3, 'Mambo Jambo Coffee ', 8.99, 50));
          resolve(arr);
        } catch (err) {
          reject(err);
        }
      }, 3000);
    });
  }

  public getAllProductsAsync3(): Observable<Product[]> {
    // tslint:disable-next-line: deprecation
    return Observable.create(observe => {
      setTimeout(() => {
        try {
          const arr: Product[] = [];
          arr.push(new Product(1, 'Pizza + Drink + Icecream', 69.9, 100));
          arr.push(new Product(2, '2 Litter buttle ', 4.99, 100));
          arr.push(new Product(3, 'Mambo Jambo Coffee ', 8.99, 50));
          observe.next(arr);
        } catch (err) {
          observe.error(err);
        }
      }, 3000);
    });
  }

  public getAllProductsAsync4(): Observable<Product[]> {
    // tslint:disable-next-line: deprecation
    return this.httpClient.get<Product[]>('/assets/json/products.json', { withCredentials: true });
  }



}

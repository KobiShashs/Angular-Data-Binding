import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/models/Product';
import { Title } from '@angular/platform-browser';
import { log } from 'util';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  public constructor(private title: Title, private productsService: ProductsService) { }

  ngOnInit() {
    this.title.setTitle('Our Products');
    console.log('START');

    	const arr: Product[] = [];
      arr.push(new Product(1, 'Pizza + Drink + Icecream', 69.9, 100));
      arr.push(new Product(2, '2 Litter buttle ', 4.99, 100));
      arr.push(new Product(3, 'Mambo Jambo Coffee ', 8.99, 50));
      return arr;
    // synchronic call
    // this.products = this.productsService.getAllProducts();

    // asynchronic call using callback
    // this.productsService.getAllProductsAsync1((products) => {
    //   this.products = products;
    //   console.log('Success');
    // }, () => {
    //   console.log('Falied');

    // });
    //console.log(this.prooducts);//not allowed

    // asynchronic call using promise
    // this.productsService.getAllProductsAsync2().then(products => {
    //   this.products = products;
    // }).catch(err => {
    //   alert('Error: ' + err);
    // });
    this.productsService.getAllProductsAsync3().subscribe(
      products => {
        this.products = products;
      },
      err => {
        console.log(err);
      });
    console.log('END');

  }



}

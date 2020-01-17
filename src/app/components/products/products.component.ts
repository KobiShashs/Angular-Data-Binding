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

    // Synchronous call
    // this.products = this.productsService.getAllProducts();
    //console.log(this.products);

    // Asynchronous call using callback
    // this.productsService.getAllProductsAsync1((products) => {
    //   this.products = products;
    //   console.log(products);
    // }, (err) => { console.log(err.message) });

    // Asynchronic call using promise
    // this.productsService.getAllProductsAsync2().then((products) => {
    //   this.products = products;
    //   console.log(products);
    // }
    // ).catch((err) => { console.log(err.message)});


    // Asynchronic call using observable
    this.productsService.getAllProductsAsync4()
    .subscribe((products)=>{this.products=products},
                          (err)=>{console.log(err.message)});


    console.log('END');
  }



}





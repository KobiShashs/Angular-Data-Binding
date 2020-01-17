import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  public product: Product;
  public constructor(private activateRoute: ActivatedRoute,
    private productService: ProductsService) { }
  ngOnInit() {
    this.productService.getAllProductsAsync4().subscribe(
      (products) => {
        const id = +this.activateRoute.snapshot.params.id;
        this.product = products.find(p => p.id === id);
      },
      (err) => {
        console.log(err.message);
      }
    );

    console.log();
  }

}

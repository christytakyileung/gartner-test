import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { Product } from '../product';

import {CategoryService} from "../category.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: any;

    constructor(private productService: ProductService) { }

  ngOnInit() {
      this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }

  createProduct(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.productService.addProduct({ name } as Product)
        .subscribe(product => {
          this.products.push(product);
        });
  }
}

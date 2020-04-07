import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {PRODUCTS} from '../products';
import {ProductService} from '../product.service';
import {MessageService} from '../message.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
      this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.messageService.add(`HeroService: Selected hero id=${product.id}`);
  }

}
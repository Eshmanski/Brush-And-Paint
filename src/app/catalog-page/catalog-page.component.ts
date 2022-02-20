import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../shared/services/products.service";
import {Product} from "../shared/interfaces";

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {
  products: Product[] = [];
  pages: number = 1;
  currentPage: number = 1;
  countEl: number = 12;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.pages = Math.ceil(this.products.length / this.countEl) + 1 ;
    });
  }

  numSequence(num: number): Array<number> {
    return Array(num).fill('').map((_, index: number) => {
      return index+1;
    });
  }

  switchPage(num: number) {
    this.currentPage = num;
  }
}

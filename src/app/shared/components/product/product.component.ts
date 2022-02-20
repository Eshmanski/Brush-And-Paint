import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  isErrorLoadImage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  errorImage($event: ErrorEvent) {
    console.log($event.error)
    this.isErrorLoadImage = true;
  }
}

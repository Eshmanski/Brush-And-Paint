import { Component, OnInit } from '@angular/core';
import { faPaintBrush, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  faBrush = faPaintBrush;
  faCart = faShoppingCart;
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}

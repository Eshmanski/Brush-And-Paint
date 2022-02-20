import { Component, OnInit } from '@angular/core';
import {faPaintBrush, faShoppingCart, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  faBrush: IconDefinition   = faPaintBrush;
  faCart: IconDefinition    = faShoppingCart;


  isShow: boolean = false;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  onShowAuth() {
    document.body.style.overflow = 'hidden';
    this.isShow = true;
  }

  hideAuth() {
    document.body.style.overflow = 'auto';
    this.isShow = false;
  }

  logoutHandler() {
    this.auth.logout();
  }
}

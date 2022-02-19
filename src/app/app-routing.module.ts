import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {CatalogPageComponent} from "./catalog-page/catalog-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {CartPageComponent} from "./cart-page/cart-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: '', pathMatch: 'full', component: HomePageComponent },
      { path: 'catalog', component: CatalogPageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'cart', component: CartPageComponent },
      { path: 'profile', component: ProfilePageComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { ProductComponent } from './shared/components/product/product.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import {SharedModule} from "./shared/shared.module";
import {FilterPipe} from "./shared/pipes/filter.pipe";


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    CatalogPageComponent,
    AboutPageComponent,
    CartPageComponent,
    ProfilePageComponent,
    AuthComponent,
    ProductComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

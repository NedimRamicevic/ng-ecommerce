import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { SaleComponent } from './components/sale/sale.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    SaleComponent,
    NavbarComponent,
    ContactComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SaleComponent } from './components/sale/sale.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'product/:id',
    component:ProductDetailComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  {
    path:'sale',
    component:SaleComponent,
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'**',
    redirectTo:'/home',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

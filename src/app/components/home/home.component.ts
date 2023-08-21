import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit   {
  products:any

  
  constructor (private service: ProductsService){}

  ngOnInit(): void {
    this.service.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

}

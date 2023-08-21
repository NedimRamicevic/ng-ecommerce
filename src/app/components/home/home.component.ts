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

  
  

  ngOnInit(): void {
    this.products = [
      {
        'id': 1,
        'name': 'Product 1',
        'price': 100,
        'image': 'https://via.placeholder.com/200x150'
        
      },
      {
        'id': 1,
        'name': 'Product 1',
        'price': 100,
        'image': 'https://via.placeholder.com/200x150'
        
      },
      {
        'id': 1,
        'name': 'Product 1',
        'price': 100,
        'image': 'https://via.placeholder.com/200x150'
        
      },
      {
        'id': 1,
        'name': 'Product 1',
        'price': 100,
        'image': 'https://via.placeholder.com/200x150'
        
      },
    ];
  }

}

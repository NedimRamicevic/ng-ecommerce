import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    products: any;
    constructor(private firebaseService: FirebaseService) { }

    ngOnInit(): void {
      this.products = this.firebaseService.getProducts();
    }
    
    deleteProduct(id: string){
      this.firebaseService.deleteProduct(id);
    }
   

}

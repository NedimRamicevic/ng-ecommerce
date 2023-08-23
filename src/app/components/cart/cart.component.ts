import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    totalPrice:number = 0;
    products: any;
    constructor(private firebaseService: FirebaseService) { 
     
      this.getProducts();
    }

    ngOnInit(): void {
      this.totalPrice = 0;
    } 

    getProducts(){
      
      this.firebaseService.getProducts().subscribe(data => {
        this.products = data;
        this.totalPrice = 0;
        this.products.forEach((product: any) => {
        this.totalPrice += (product.price * product.quantity);
      });
      });
    }

    deleteProduct(id: string){
      this.firebaseService.deleteProduct(id);
    }

    onMinusClick(product: any){
      if(product.quantity > 1){
      this.totalPrice = 0;

        product.quantity--;
        console.log('product.id');
        console.log(product.id);
        this.firebaseService.updateProduct(product);


      }
    }
    onPlusClick(product: any){
      this.totalPrice = 0;

      product.quantity++;
      this.firebaseService.updateProduct(product);

    }
    // deleteProduct(id: string){
    //   this.firebaseService.deleteProduct(id);
    // }
   

}

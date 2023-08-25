import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from '../../services/products.service';
import { FirebaseService} from '../../services/firebase.service';
import Product from '../../models/product-interface';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:any; 
  color:string = 'gray'

  constructor(private route: ActivatedRoute,private service:ProductsService, private firebaseService: FirebaseService) {
  }
  onDenemeClick(){
    this.firebaseService.deneme();
  }

  onHeartClick(){
    this.color = this.color === 'red' ? 'gray' : 'red';
  }

  addProduct(){
    this.firebaseService.addProduct(this.product);
  }

  ngOnInit(){
    this.route.params.subscribe(params=>{
        let id = params['id'];
        this.service.getProduct(id).subscribe((data) => {
          this.product = data;
          console.log(this.product);
        });

    })
  }
}

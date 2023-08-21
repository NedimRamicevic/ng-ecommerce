import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:any
  color:string = 'gray'

  constructor(private route: ActivatedRoute,private service:ProductsService) {
  }

  onHeartClick(){
    this.color = this.color === 'red' ? 'gray' : 'red';
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

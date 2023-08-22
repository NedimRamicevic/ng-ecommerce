import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  productsCategories: any;

  constructor(private firebaseService: FirebaseService) { }
   onlyUnique(value:any, index:any, array:any) {
    return array.indexOf(value) === index;
  }
  ngOnInit(): void {
   
  }

  getProducts(){
      
  
  }

}

import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import  Product  from '../models/product-interface';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fs: Firestore) { }

  getProducts(){
    return collectionData(collection(this.fs, 'products'));
  }
  getProduct(id: string){
    return collectionData(collection(this.fs, 'products'), {idField: 'id'});
  }
  addProduct(product: Product){
    return addDoc(collection(this.fs, 'products'), {
      Id: product.id,
      title: product.title,
      category: product.category,
      description: product.description,
      price: product.price,
      image: product.image,
      rating: product.rating,
      
    });
  }
  deleteProduct(id: string){
    return deleteDoc(doc(this.fs, 'products', id));
  }

}

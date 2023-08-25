import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc, setDoc, getFirestore, getDoc } from '@angular/fire/firestore';
import  Product  from '../models/product-interface';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private fs: Firestore, ) {
    
   }

async deneme(){
  const productsRef = collection(this.fs, 'products');
  const docRef = doc(productsRef, 'Rp8eZgiRgQ7hklA71Kuy');
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data());
}

updateDeneme(productID: string){
  const productsRef = collection(this.fs, 'products');
  const docRef = doc(productsRef, productID);
  updateDoc(docRef, {
    title: 'updated title'
  });
}

  getProducts(){
    return collectionData(collection(this.fs, 'products'), {idField: 'id'});
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
      quantity: 1
      
    });
  }
 
  deleteProduct(id: string){
    const productRef = doc(this.fs, `products/${id}`);
    return deleteDoc(productRef);
  }

  updateProduct(product: Product){
   const productRef = doc(this.fs, `products/${product.id}`);
   return setDoc(productRef, {
    Id: product.id,
    title: product.title,
    category: product.category,
    description: product.description,
    price: product.price,
    image: product.image,
    rating: product.rating,
    quantity: product.quantity
    
  });
  }

}

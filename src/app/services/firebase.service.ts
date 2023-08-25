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
  console.log(docRef);
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data());
}

async updateDeneme(product: any){
  const docRef = doc(this.fs, 'products/Rp8eZgiRgQ7hklA71Kuy');
  await updateDoc(docRef, {
    title:'selamlar'

  });
}

  getProducts(){
    return collectionData(collection(this.fs, 'products'), {idField: 'id'});
  }


  getProduct(id: string){
    return collectionData(collection(this.fs, 'products'), {idField: 'id'});
  }

  

  addProduct(product: Product){
    if(product.quantity == null){
      product.quantity = 1;
    }
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

  async updateProduct(product: Product){
   const docRef = doc(this.fs, `products/${product.id}`);
   await updateDoc(docRef, {
     quantity: product.quantity
 
   });
  }

}

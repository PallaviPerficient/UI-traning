import { Injectable } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import {CartItem} from '../model/cart.item.model';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CartSrviceService {
private items$ = new BehaviorSubject<CartItem[]>([]);
  constructor() { }

  getCart(){
    return this.items$.asObservable();
  }

  addToCart(newItem:CartItem ){
    this.items$.next([...this.items$.getValue(), newItem]);
  }


  removeItem(id: number){
    this.items$.next(this.items$.getValue().filter(item => item.id != id));
  }

  changeQut(quantity: number, id: number){
    const items = this.items$.getValue();
    const index = items.findIndex(item => item.id == id);
    items[index].quantity += quantity;
    this.items$.next(items);

  }

  getTotalAmount(){
    return this.items$.pipe(map(items =>{
      let total = 0 ;
      items.forEach((item) => {
        total += item.quantity * item.price;
      });

      return total;
    }))
  }
}

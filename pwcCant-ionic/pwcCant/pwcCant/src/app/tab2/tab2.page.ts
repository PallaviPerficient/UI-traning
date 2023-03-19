import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cart.item.model';
import { CartSrviceService } from '../service/cart-srvice.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cartItems: Observable<CartItem[]>;
  totalAmount: Observable<number>;


  constructor(private cartService: CartSrviceService,
    private alertController: AlertController) {
  
    this.cartItems = this.cartService.getCart();
    console.log("cartItems");
    console.log(this.cartItems);

    this.totalAmount = this.cartService.getTotalAmount();
    console.log(this.totalAmount);
  }


  ionViewWillEnter() {
    console.log(this.cartItems);
    // console.log( this.cartItems);
  }

  increase(item: CartItem) {
    this.cartService.changeQut(1, item.id)
  }


  decrease(item: CartItem) {
    if (item.quantity == 1) this.removeFromCart(item);
    else this.cartService.changeQut(-1, item.id)
  }

  
  async removeFromCart(item: CartItem) {

    const alert = await this.alertController.create({
      header: 'Remove',
      message: 'Are you sure you want to remove?',

      buttons: [{
        text: 'Yes',
        handler: () => this.cartService.removeItem(item.id),
      },
      {
        text: 'No',
      }

      ],
    });

    await alert.present();
  }






}

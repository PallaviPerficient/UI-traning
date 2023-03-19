import { Component, ViewChild } from '@angular/core';
import { IonModal, ModalController, ToastController } from '@ionic/angular';
import { SIGUSR1 } from 'constants';
import {CartItem} from '../model/cart.item.model';
import { CartSrviceService } from '../service/cart-srvice.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  searchTerm:any;
  products: any[]=[];
 
  FilterValue: any = '';
  radioValue: any;
  radioValue2: any;
  constructor(private toastController: ToastController,
    private modalCtrl: ModalController,
    private cartService:CartSrviceService) { 
    
    // this.products = [];
    this.products = this.item;
    console.log(this.products);
  console.log(this.item);

    

  }

clearFilter(){
  
}


addItemToCart(id:any,title:any,price:any,image:any){
  const cartitem: CartItem = {

    id: id,
    name: title,
    price: price,
    image: image,
    quantity: 1,
  };

  this.cartService.addToCart(cartitem);
  this.presentToast();
}


async presentToast() {
  const toast = await this.toastController.create({
    message: 'Food added to the cart',
    duration: 1500,
   position: 'top'
  });

  await toast.present();
}


  categoryList = [
    {
      "categoryId": 1,
      categoryName: 'TEA & COFFEE',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuB6maiYpWoUGU93xdWQk6rG9gbffPXdd_nWy3vT8D82RQNedA2atz5a50uTTbnomPN64&usqp=CAU'
    },
    {
      "categoryId": 2,
      categoryName: 'SOUTH INDIAN',
      image: 'https://thedaily9.in/wp-content/uploads/2023/01/south-indian-diet.jpg'
    },
    {
      "categoryId": 3,
      categoryName: 'SANDWICHES & BURGERS',
      image: 'https://foodsguy.com/wp-content/uploads/2021/04/burger-vs-sandwhich.jpg'
    },
    {
      "categoryId": 4,
      categoryName: 'CHINESE',
      image: 'https://kohinoor-joy.com/wp-content/uploads/2020/01/indo-chinese-food.jpg'
    },
  ];




  item = [

    {
      "categoryId": 1,
      "categoryName": "Tea",
      "price": 10,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": "https://www.bigbasket.com/media/uploads/p/xxl/40183530_8-yera-teacoffee-glass-mug-set.jpg"
    },
    {
      "categoryId": 2,
      "categoryName": "Coffee",
      "price": 20,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "categoryId": 3,
      "categoryName": "Milk Shake",
      "price": 50,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Strawberry_milk_shake_%28cropped%29.jpg/640px-Strawberry_milk_shake_%28cropped%29.jpg"
    },
    {
      "categoryId": 4,
      "categoryName": "Cold Coffee",
      "price": 40,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": "https://cookingfromheart.com/wp-content/uploads/2022/04/Cold-Coffee-4.jpg"
    },
    {
      "categoryId": 5,
      "categoryName": "Chicken Biryani",
      "price": 250,
      "isAvailabel": true,
      "type": 'Non-Veg',
      "categoryImg": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani.jpg"
    },
    {
      "categoryId": 6,
      "categoryName": "Mutton Biryani",
      "price": 300,
      "isAvailabel": true,
      "type": 'Non-Veg',
      "categoryImg": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani.jpg"
    },
    {
      "categoryId": 7,
      "categoryName": "Masala Dosa",
      "price": 70,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": "https://static.toiimg.com/thumb/54289752.cms?width=800&height=800&imgsize=495844"
    },
    {
      "categoryId": 8,
      "categoryName": "Sambar Vada",
      "price": 60,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": "https://cookingfromheart.com/wp-content/uploads/2022/04/Cold-Coffee-4.jpg"
    },
    {
      "categoryId": 9,
      "categoryName": "Veg Sandwich",
      "price": 110,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": "https://cookingfromheart.com/wp-content/uploads/2022/04/Cold-Coffee-4.jpg"
    }, 
    {
      "categoryId": 10,
      "categoryName": "Fried Rice",
      "price": 100,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": "https://www.allrecipes.com/thmb/G96Vc_7F5Dm0csJJb2STC6tO97k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79543-fried-rice-restaurant-style-mfs-49-79b33da67e2643e8b585972cd92c5821.jpg"
    },
    {
      "categoryId": 11,
      "categoryName": "Veg Manchurians",
      "price": 80,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": "https://cookingfromheart.com/wp-content/uploads/2022/04/Cold-Coffee-4.jpg"
    },
    {
      "categoryId": 12,
      "categoryName": "Paneer Thali",
      "price": 170,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": "https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6854/primary/7_1.jpg"
    },
    {
      "categoryId": 13,
      "categoryName": "Rice Thali",
      "price": 100,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": "https://cookingfromheart.com/wp-content/uploads/2022/04/Cold-Coffee-4.jpg"
    },
    {
      "categoryId": 14,
      "categoryName": "MixVeg Thali ",
      "price": 120,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": "https://cookingfromheart.com/wp-content/uploads/2022/04/Cold-Coffee-4.jpg"
    },
    {
      "categoryId": 15,
      "categoryName": "Puri Bhaji",
      "price": 70,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": "https://cookingfromheart.com/wp-content/uploads/2022/04/Cold-Coffee-4.jpg"
    },
    {
      "categoryId": 16,
      "categoryName": "Mini Thali",
      "price": 100,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": ""
    },
    {
      "categoryId": 17,
      "categoryName": "Gulab Jamun",
      "price": 50,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": "https://cookingfromheart.com/wp-content/uploads/2022/04/Cold-Coffee-4.jpg"
    },
    {
      "categoryId": 18,
      "categoryName": "Ice Cream",
      "price": 120,
      "isAvailabel": true,
      "type": 'Veg',
      "categoryImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg"
    },


  ];


  radioGroupChange(Value:any){
console.log(Value);
this.FilterValue=Value.detail.value;
this.radioValue = Value.detail.value;
console.log(this.FilterValue);
// this.products = [];
  }


  radioGroupChange2(val:any){

  }


ApplyFilter(){
  console.log(this.FilterValue);
  console.log(this.item);
  this.products = this.item;
  if(this.FilterValue == 'LowtoHigh'){
    this.products.sort((s1, s2) =>  s1.price - s2.price);
    console.log(this.item);
  }else if (this.FilterValue == 'HightoLow'){
    this.products.sort((s1, s2) =>  s2.price - s1.price);
    console.log(this.item);
  }else{
    this.products =  this.item;
    console.log(this.item);
  }


  this.FilterValue = '';
 this.modalCtrl.dismiss()
}

// Assume your array of items is called itemsArray
// Filter by veg category
// const vegItems = itemsArray.filter((item) => item.category === 'veg');

// Filter by non-veg category
// const nonVegItems = itemsArray.filter((item) => item.category === 'non-veg');


// Assume your array of items is called itemsArray
// Sort by price low to high and filter by veg category
// const sortedAndFilteredArray = itemsArray
//   .sort((a, b) => a.price - b.price)
//   .filter((item) => item.category === 'veg');



// const originalItems = [
//   { name: 'Item 1', price: 15, category: 'vegetarian' },
//   { name: 'Item 2', price: 20, category: 'non-vegetarian' },
//   { name: 'Item 3', price: 10, category: 'vegetarian' }
// ];

// // initialize filtered items to original items
// let filteredItems = originalItems;

// // apply filters as needed

// // clear filters by reloading original items
// filteredItems = originalItems;

// clearFilter(){
//   this.radioValue = '';
//   console.log( this.item);
//   this.products =  this.item;
//   console.log( this.item);
//   console.log( this.products);
//   // this.modalCtrl.dismiss()
// }

}

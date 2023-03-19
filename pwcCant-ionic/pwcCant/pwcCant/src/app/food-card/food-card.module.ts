import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodCardPageRoutingModule } from './food-card-routing.module';

import { FoodCardPage } from './food-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodCardPageRoutingModule
  ],
  declarations: [FoodCardPage]
})
export class FoodCardPageModule {}

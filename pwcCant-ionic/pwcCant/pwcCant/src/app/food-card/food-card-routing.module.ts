import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodCardPage } from './food-card.page';

const routes: Routes = [
  {
    path: '',
    component: FoodCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodCardPageRoutingModule {}

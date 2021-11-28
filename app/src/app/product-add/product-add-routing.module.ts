import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Product_addPage } from './product-add.page';

const routes: Routes = [
  {
    path: '',
    component: Product_addPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Product_addPageRoutingModule {}

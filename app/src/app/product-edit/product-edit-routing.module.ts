import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Product_editPage } from './product-edit.page';

const routes: Routes = [
  {
    path: '',
    component: Product_editPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Product_editPageRoutingModule {}

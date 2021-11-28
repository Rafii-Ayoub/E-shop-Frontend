import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shop_editPage } from './shop-edit.page';

const routes: Routes = [
  {
    path: '',
    component: Shop_editPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shop_editPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shop_addPage } from './shop-add.page';

const routes: Routes = [
  {
    path: '',
    component: Shop_addPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shop_addPageRoutingModule {}

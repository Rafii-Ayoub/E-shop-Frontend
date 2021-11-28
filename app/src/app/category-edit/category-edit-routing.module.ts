import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Category_editPage } from './category-edit.page';

const routes: Routes = [
  {
    path: '',
    component: Category_editPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Category_editPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Category_addPage } from './category-add.page';

const routes: Routes = [
  {
    path: '',
    component: Category_addPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Categorie_addPageRoutingModule {}

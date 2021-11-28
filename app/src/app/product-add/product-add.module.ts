import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Product_addPage } from './product-add.page';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: Product_addPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Product_addPage]
})
export class Product_addPageModule {}

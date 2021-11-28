import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Shop_addPage } from './shop-add.page';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: Shop_addPage
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
  declarations: [Shop_addPage]
})
export class Shop_addPageModule {}

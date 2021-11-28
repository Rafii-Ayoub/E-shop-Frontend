import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Category_addPage } from './category-add.page';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: Category_addPage
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
  declarations: [Category_addPage]
})
export class Category_addPageModule {}

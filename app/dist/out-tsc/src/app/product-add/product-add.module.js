import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Product_addPage } from './product-add.page';
const routes = [
    {
        path: '',
        component: Product_addPage
    }
];
let Product_addPageModule = class Product_addPageModule {
};
Product_addPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [Product_addPage]
    })
], Product_addPageModule);
export { Product_addPageModule };
//# sourceMappingURL=product-add.module.js.map
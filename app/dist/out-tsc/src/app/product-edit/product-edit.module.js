import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Product_editPage } from './product-edit.page';
const routes = [
    {
        path: '',
        component: Product_editPage
    }
];
let Product_editPageModule = class Product_editPageModule {
};
Product_editPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [Product_editPage]
    })
], Product_editPageModule);
export { Product_editPageModule };
//# sourceMappingURL=product-edit.module.js.map
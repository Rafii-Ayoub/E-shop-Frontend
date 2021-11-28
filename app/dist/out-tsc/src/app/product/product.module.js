import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductPage } from './product.page';
const routes = [
    {
        path: '',
        component: ProductPage
    }
];
let ProductPageModule = class ProductPageModule {
};
ProductPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProductPage]
    })
], ProductPageModule);
export { ProductPageModule };
//# sourceMappingURL=product.module.js.map
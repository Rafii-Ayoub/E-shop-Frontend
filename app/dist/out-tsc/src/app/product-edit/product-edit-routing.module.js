import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product_editPage } from './product-edit.page';
const routes = [
    {
        path: '',
        component: Product_editPage
    }
];
let Product_editPageRoutingModule = class Product_editPageRoutingModule {
};
Product_editPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Product_editPageRoutingModule);
export { Product_editPageRoutingModule };
//# sourceMappingURL=product-edit-routing.module.js.map
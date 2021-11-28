import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product_addPage } from './product-add.page';
const routes = [
    {
        path: '',
        component: Product_addPage
    }
];
let Product_addPageRoutingModule = class Product_addPageRoutingModule {
};
Product_addPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Product_addPageRoutingModule);
export { Product_addPageRoutingModule };
//# sourceMappingURL=product-add-routing.module.js.map
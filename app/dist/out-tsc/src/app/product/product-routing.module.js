import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductPage } from './product.page';
const routes = [
    {
        path: '',
        component: ProductPage
    }
];
let ProductPageRoutingModule = class ProductPageRoutingModule {
};
ProductPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ProductPageRoutingModule);
export { ProductPageRoutingModule };
//# sourceMappingURL=product-routing.module.js.map
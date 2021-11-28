import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShopPage } from './shop.page';
const routes = [
    {
        path: '',
        component: ShopPage
    }
];
let ShopPageRoutingModule = class ShopPageRoutingModule {
};
ShopPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ShopPageRoutingModule);
export { ShopPageRoutingModule };
//# sourceMappingURL=shop-routing.module.js.map
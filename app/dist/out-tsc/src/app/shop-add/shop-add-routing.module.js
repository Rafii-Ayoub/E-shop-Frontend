import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Shop_addPage } from './shop-add.page';
const routes = [
    {
        path: '',
        component: Shop_addPage
    }
];
let Shop_addPageRoutingModule = class Shop_addPageRoutingModule {
};
Shop_addPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Shop_addPageRoutingModule);
export { Shop_addPageRoutingModule };
//# sourceMappingURL=shop-add-routing.module.js.map
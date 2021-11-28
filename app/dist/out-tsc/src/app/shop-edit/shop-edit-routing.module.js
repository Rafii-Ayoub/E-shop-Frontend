import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Shop_editPage } from './shop-edit.page';
const routes = [
    {
        path: '',
        component: Shop_editPage
    }
];
let Shop_editPageRoutingModule = class Shop_editPageRoutingModule {
};
Shop_editPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Shop_editPageRoutingModule);
export { Shop_editPageRoutingModule };
//# sourceMappingURL=shop-edit-routing.module.js.map
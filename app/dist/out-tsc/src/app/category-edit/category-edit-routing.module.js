import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Category_editPage } from './category-edit.page';
const routes = [
    {
        path: '',
        component: Category_editPage
    }
];
let Category_editPageRoutingModule = class Category_editPageRoutingModule {
};
Category_editPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Category_editPageRoutingModule);
export { Category_editPageRoutingModule };
//# sourceMappingURL=category-edit-routing.module.js.map
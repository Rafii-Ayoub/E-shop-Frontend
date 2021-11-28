import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryPage } from './category.page';
const routes = [
    {
        path: '',
        component: CategoryPage
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CategoryPageRoutingModule);
export { CategoryPageRoutingModule };
//# sourceMappingURL=category-routing.module.js.map
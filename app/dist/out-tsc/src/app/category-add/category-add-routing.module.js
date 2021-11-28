import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Category_addPage } from './category-add.page';
const routes = [
    {
        path: '',
        component: Category_addPage
    }
];
let Categorie_addPageRoutingModule = class Categorie_addPageRoutingModule {
};
Categorie_addPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Categorie_addPageRoutingModule);
export { Categorie_addPageRoutingModule };
//# sourceMappingURL=category-add-routing.module.js.map
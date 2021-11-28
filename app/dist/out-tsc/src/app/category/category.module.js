import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CategoryPage } from './category.page';
const routes = [
    {
        path: '',
        component: CategoryPage
    }
];
let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CategoryPage]
    })
], CategoryPageModule);
export { CategoryPageModule };
//# sourceMappingURL=category.module.js.map
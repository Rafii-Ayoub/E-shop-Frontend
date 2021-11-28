import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Category_addPage } from './category-add.page';
const routes = [
    {
        path: '',
        component: Category_addPage
    }
];
let Category_addPageModule = class Category_addPageModule {
};
Category_addPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [Category_addPage]
    })
], Category_addPageModule);
export { Category_addPageModule };
//# sourceMappingURL=category-add.module.js.map
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Shop_addPage } from './shop-add.page';
const routes = [
    {
        path: '',
        component: Shop_addPage
    }
];
let Shop_addPageModule = class Shop_addPageModule {
};
Shop_addPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [Shop_addPage]
    })
], Shop_addPageModule);
export { Shop_addPageModule };
//# sourceMappingURL=shop-add.module.js.map
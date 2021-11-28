import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Shop_editPage } from './shop-edit.page';
const routes = [
    {
        path: '',
        component: Shop_editPage
    }
];
let Shop_editPageModule = class Shop_editPageModule {
};
Shop_editPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [Shop_editPage]
    })
], Shop_editPageModule);
export { Shop_editPageModule };
//# sourceMappingURL=shop-edit.module.js.map
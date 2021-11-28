import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Category_editPage } from './category-edit.page';
const routes = [
    {
        path: '',
        component: Category_editPage
    }
];
let Category_editPageModule = class Category_editPageModule {
};
Category_editPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [Category_editPage]
    })
], Category_editPageModule);
export { Category_editPageModule };
//# sourceMappingURL=category-edit.module.js.map
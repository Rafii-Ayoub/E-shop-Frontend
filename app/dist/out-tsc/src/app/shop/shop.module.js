import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShopPage } from './shop.page';
const routes = [
    {
        path: '',
        component: ShopPage
    }
];
let ShopPageModule = class ShopPageModule {
};
ShopPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ShopPage]
    })
], ShopPageModule);
export { ShopPageModule };
//# sourceMappingURL=shop.module.js.map
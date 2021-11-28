import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'shop/:id',
        loadChildren: () => import('./shop/shop.module').then(m => m.ShopPageModule)
    },
    {
        path: 'shop-edit/:id',
        loadChildren: () => import('./shop-edit/shop-edit.module').then(m => m.Shop_editPageModule)
    },
    {
        path: 'shop-add',
        loadChildren: () => import('./shop-add/shop-add.module').then(m => m.Shop_addPageModule)
    },
    {
        path: 'category/:id',
        loadChildren: () => import('./category/category.module').then(m => m.CategoryPageModule)
    },
    {
        path: 'category-edit/:id',
        loadChildren: () => import('./category-edit/category-edit.module').then(m => m.Category_editPageModule)
    },
    {
        path: 'category-add/:id',
        loadChildren: () => import('./category-add/category-add.module').then(m => m.Category_addPageModule)
    },
    {
        path: 'product/:id',
        loadChildren: () => import('./product/product.module').then(m => m.ProductPageModule)
    },
    {
        path: 'product-edit/:id',
        loadChildren: () => import('./product-edit/product-edit.module').then(m => m.Product_editPageModule)
    },
    {
        path: 'product-add/:id',
        loadChildren: () => import('./product-add/product-add.module').then(m => m.Product_addPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
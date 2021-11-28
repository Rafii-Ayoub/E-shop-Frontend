import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let Category_editPage = class Category_editPage {
    constructor(restapi, loadingController, route, router) {
        this.restapi = restapi;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
        this.api = restapi;
    }
    getCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading'
            });
            yield loading.present();
            yield this.api.getCategory(this.id)
                .subscribe(res => {
                console.log(res);
                this.category = res;
                this.title = this.category.title;
                this.description = this.category.description;
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    saveCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.api.updateCategory(this.category._id, this.category)
                .subscribe(res => {
                console.log(res);
                this.router.navigate(['/']);
            }, (err) => {
                console.log(err);
            });
        });
    }
    deleteCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.api.deleteCategory(this.category._id)
                .subscribe(res => {
                console.log(res);
                this.router.navigate(['/']);
            }, (err) => {
                console.log(err);
            });
        });
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading'
            });
            yield loading.present();
            yield this.api.getProducts()
                .subscribe(res => {
                console.log(res);
                this.products = res;
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    save() {
        console.log(this.description);
        console.log(this.title);
        console.log(this.category._id);
        this.category.title = this.title;
        this.category.description = this.description;
        this.saveCategory();
    }
    delete() {
        this.deleteCategory();
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.id = params.get('id');
        });
        this.getProducts();
        console.log("Current id: " + this.id);
        this.getCategory(this.id);
    }
};
Category_editPage = __decorate([
    Component({
        selector: 'app-category-edit',
        templateUrl: './category-edit.page.html',
        styleUrls: ['./category-edit.page.scss'],
    })
], Category_editPage);
export { Category_editPage };
//# sourceMappingURL=category-edit.page.js.map
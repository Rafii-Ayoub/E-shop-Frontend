import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let Product_editPage = class Product_editPage {
    constructor(restapi, loadingController, route, router) {
        this.restapi = restapi;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
        this.api = restapi;
    }
    getProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading'
            });
            yield loading.present();
            yield this.api.getProduct(this.id)
                .subscribe(res => {
                console.log(res);
                this.product = res;
                this.title = this.product.title;
                this.description = this.product.description;
                this.price = this.product.price;
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    saveProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.api.updateProduct(this.product._id, this.product)
                .subscribe(res => {
                console.log(res);
                this.router.navigate(['/']);
            }, (err) => {
                console.log(err);
            });
        });
    }
    deleteProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.api.deleteProduct(this.product._id)
                .subscribe(res => {
                console.log(res);
                this.router.navigate(['/']);
            }, (err) => {
                console.log(err);
            });
        });
    }
    save() {
        console.log(this.description);
        console.log(this.title);
        console.log(this.product._id);
        console.log(this.price);
        this.product.title = this.title;
        this.product.description = this.description;
        this.product.prix = this.price;
        this.saveProduct();
    }
    delete() {
        this.deleteProduct();
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.id = params.get('id');
        });
        console.log("Current id: " + this.id);
        this.getProduct(this.id);
    }
};
Product_editPage = __decorate([
    Component({
        selector: 'app-product-edit',
        templateUrl: './product-edit.page.html',
        styleUrls: ['./product-edit.page.scss'],
    })
], Product_editPage);
export { Product_editPage };
//# sourceMappingURL=product-edit.page.js.map
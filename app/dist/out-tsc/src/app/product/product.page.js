import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let ProductPage = class ProductPage {
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
        this.product.title = this.title;
        this.product.description = this.description;
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
ProductPage = __decorate([
    Component({
        selector: 'app-product',
        templateUrl: './product.page.html',
        styleUrls: ['./product.page.scss'],
    })
], ProductPage);
export { ProductPage };
//# sourceMappingURL=product.page.js.map
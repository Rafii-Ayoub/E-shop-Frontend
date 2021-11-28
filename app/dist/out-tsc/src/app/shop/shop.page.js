import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let ShopPage = class ShopPage {
    constructor(restapi, loadingController, route, router) {
        this.restapi = restapi;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
        this.api = restapi;
    }
    getShop(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading'
            });
            yield loading.present();
            yield this.api.getShop(this.id)
                .subscribe(res => {
                console.log(res);
                this.shop = res;
                this.title = this.shop.title;
                this.description = this.shop.description;
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    saveShop() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.api.updateShop(this.shop._id, this.shop)
                .subscribe(res => {
                console.log(res);
                this.router.navigate(['/']);
            }, (err) => {
                console.log(err);
            });
        });
    }
    deleteShop() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.api.deleteShop(this.shop._id)
                .subscribe(res => {
                console.log(res);
                this.router.navigate(['/']);
            }, (err) => {
                console.log(err);
            });
        });
    }
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading'
            });
            yield loading.present();
            yield this.api.getCategories()
                .subscribe(res => {
                console.log(res);
                this.categories = res;
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
        console.log(this.shop._id);
        this.shop.title = this.title;
        this.shop.description = this.description;
        this.saveShop();
    }
    delete() {
        this.deleteShop();
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.id = params.get('id');
        });
        this.getCategories();
        console.log("Current id: " + this.id);
        this.getShop(this.id);
    }
};
ShopPage = __decorate([
    Component({
        selector: 'app-shop',
        templateUrl: './shop.page.html',
        styleUrls: ['./shop.page.scss'],
    })
], ShopPage);
export { ShopPage };
//# sourceMappingURL=shop.page.js.map
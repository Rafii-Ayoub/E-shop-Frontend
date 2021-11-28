import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let Shop_addPage = class Shop_addPage {
    constructor(restapi, loadingController, route, router, formBuilder) {
        this.restapi = restapi;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.shop = this.formBuilder.group({
            title: [''],
            description: [''],
        });
        this.api = restapi;
    }
    saveShop() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.api.createShop(this.shop.value)
                .subscribe(res => {
                console.log(res);
                this.router.navigate(['/']);
            }, (err) => {
                console.log(err);
            });
        });
    }
    save() {
        console.log(this.shop.value);
        this.saveShop();
    }
    ngOnInit() {
    }
};
Shop_addPage = __decorate([
    Component({
        selector: 'app-shop-add',
        templateUrl: './shop-add.page.html',
        styleUrls: ['./shop-add.page.scss'],
    })
], Shop_addPage);
export { Shop_addPage };
//# sourceMappingURL=shop-add.page.js.map
import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let HomePage = class HomePage {
    constructor(restapi, loadingController, navController) {
        this.restapi = restapi;
        this.loadingController = loadingController;
        this.navController = navController;
        this.api = restapi;
    }
    getShops() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading'
            });
            yield loading.present();
            yield this.api.getShops()
                .subscribe(res => {
                console.log(res);
                this.shops = res;
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    done(id) {
        console.log("done");
    }
    delete(id) {
        console.log("delete");
    }
    ngOnInit() {
        this.getShops();
    }
    ionViewWillEnter() {
        this.ngOnInit();
    }
};
HomePage = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    })
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map
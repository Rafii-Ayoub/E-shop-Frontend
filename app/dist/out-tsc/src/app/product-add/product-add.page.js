import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let Product_addPage = class Product_addPage {
    constructor(restapi, loadingController, route, router, formBuilder) {
        this.restapi = restapi;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.product = this.formBuilder.group({
            categoryID: [this.id],
            title: [''],
            price: ['45'],
            description: [''],
        });
        this.api = restapi;
    }
    saveProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.api.createProduct(this.product.value)
                .subscribe(res => {
                console.log(res);
                this.router.navigate(['/']);
            }, (err) => {
                console.log(err);
            });
        });
    }
    save() {
        console.log(this.id);
        this.description = this.product.value.description;
        this.title = this.product.value.title;
        this.price = this.product.value.price;
        console.log(this.description);
        this.product.setValue({ categoryID: this.id, title: this.title, description: this.description, price: this.price });
        console.log(this.product.value);
        this.saveProduct();
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.id = params.get('id');
        });
    }
};
Product_addPage = __decorate([
    Component({
        selector: 'app-product-add',
        templateUrl: './product-add.page.html',
        styleUrls: ['./product-add.page.scss'],
    })
], Product_addPage);
export { Product_addPage };
//# sourceMappingURL=product-add.page.js.map
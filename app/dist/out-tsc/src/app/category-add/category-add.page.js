import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let Category_addPage = class Category_addPage {
    constructor(restapi, loadingController, route, router, formBuilder) {
        this.restapi = restapi;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.category = this.formBuilder.group({
            boutiqueID: [this.id],
            title: [''],
            description: [''],
        });
        this.api = restapi;
    }
    saveCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.api.createCategory(this.category.value)
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
        this.description = this.category.value.description;
        this.title = this.category.value.title;
        console.log(this.description);
        this.category.setValue({ shopID: this.id, title: this.title, description: this.description });
        console.log(this.category.value);
        this.saveCategory();
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.id = params.get('id');
        });
    }
};
Category_addPage = __decorate([
    Component({
        selector: 'app-category-add',
        templateUrl: './category-add.page.html',
        styleUrls: ['./category-add.page.scss'],
    })
], Category_addPage);
export { Category_addPage };
//# sourceMappingURL=category-add.page.js.map
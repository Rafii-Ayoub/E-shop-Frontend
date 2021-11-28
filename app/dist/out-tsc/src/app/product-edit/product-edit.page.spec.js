import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Product_editPage } from './product-edit.page';
describe('Product_editPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Product_editPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(Product_editPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=product-edit.page.spec.js.map
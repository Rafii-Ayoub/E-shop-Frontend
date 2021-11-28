import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Product_addPage } from './product-add.page';
describe('ProductPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Product_addPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(Product_addPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=product-add.page.spec.js.map
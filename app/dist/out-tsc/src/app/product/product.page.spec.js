import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ProductPage } from './product.page';
describe('ProductPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ProductPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=product.page.spec.js.map
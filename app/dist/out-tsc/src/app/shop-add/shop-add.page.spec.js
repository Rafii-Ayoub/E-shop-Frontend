import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Shop_addPage } from './shop-add.page';
describe('ShopPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Shop_addPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(Shop_addPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=shop-add.page.spec.js.map
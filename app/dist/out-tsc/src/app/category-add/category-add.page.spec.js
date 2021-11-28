import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Category_addPage } from './category-add.page';
describe('CategoryPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Category_addPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(Category_addPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=category-add.page.spec.js.map
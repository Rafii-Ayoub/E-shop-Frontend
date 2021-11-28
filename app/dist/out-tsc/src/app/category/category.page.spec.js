import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CategoryPage } from './category.page';
describe('CategoryPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CategoryPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(CategoryPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=category.page.spec.js.map
import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Category_editPage } from './category-edit.page';
describe('Category_editPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Category_editPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(Category_editPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=category-edit.page.spec.js.map
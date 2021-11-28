import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Category_addPage } from './category-add.page';

describe('CategoryPage', () => {
  let component: Category_addPage;
  let fixture: ComponentFixture<Category_addPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Category_addPage ],
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Product_editPage } from './product-edit.page';

describe('Product_editPage', () => {
  let component: Product_editPage;
  let fixture: ComponentFixture<Product_editPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product_editPage ],
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

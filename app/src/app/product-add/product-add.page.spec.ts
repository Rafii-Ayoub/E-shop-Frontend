import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Product_addPage } from './product-add.page';

describe('ProductPage', () => {
  let component: Product_addPage;
  let fixture: ComponentFixture<Product_addPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product_addPage ],
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

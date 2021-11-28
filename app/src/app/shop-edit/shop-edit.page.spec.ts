import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Shop_editPage } from './shop-edit.page';

describe('ShopPage', () => {
  let component: Shop_editPage;
  let fixture: ComponentFixture<Shop_editPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shop_editPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Shop_editPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

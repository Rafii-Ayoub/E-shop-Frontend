import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class Product_addPage implements OnInit {

  private product: FormGroup;
  api: RestService;
  id: string;
  title: string;
  description: string;
  price: string;


  constructor(public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    public formBuilder: FormBuilder) {
    this.product = this.formBuilder.group({
      categoryID: [this.id],
      title: [''],
      price: ['45'],
      description: [''],
    });
    this.api = restapi;

  }

  async saveProduct() {
    await this.api.createProduct(this.product.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }



  save() {
    console.log(this.id);
    this.description = this.product.value.description;
    this.title = this.product.value.title;
    this.price = this.product.value.price;
    console.log(this.description);
    this.product.setValue({ categoryID: this.id, title: this.title, description: this.description, price: this.price })
    console.log(this.product.value);


    this.saveProduct();

  }


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }
}

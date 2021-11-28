import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product : any;
  api : RestService;
  id : string;
  title : string;
  price : string;
  description : string;
  productID : string;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
    public router : Router) {

    this.api = restapi;

  }

  async getProduct(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getProduct(this.id)
      .subscribe(res => {
        console.log(res);
        this.product = res;
        this.title = this.product.title;
        this.description = this.product.description;
        this.price = this.product.price;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async saveProduct(){
    await this.api.updateProduct(this.product._id, this.product)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  async deleteProduct(){
    await this.api.deleteProduct(this.product._id)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {

    console.log(this.description);
    console.log(this.title);
    console.log(this.product._id);

    this.product.title = this.title;
    this.product.description = this.description;

    this.saveProduct();

  }

  delete() {

    this.deleteProduct();
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    console.log("Current id: " + this.id);
    this.getProduct(this.id);
    
  }
}

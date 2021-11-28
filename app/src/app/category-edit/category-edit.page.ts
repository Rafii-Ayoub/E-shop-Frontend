import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.page.html',
  styleUrls: ['./category-edit.page.scss'],
})
export class Category_editPage implements OnInit {
  category : any;
  products : any;
  api : RestService;
  id : string;
  title : string;
  description : string;
  categoryID : string;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
    public router : Router) {

    this.api = restapi;

  }

  async getCategory(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getCategory(this.id)
      .subscribe(res => {
        console.log(res);
        this.category = res;
        this.title = this.category.title;
        this.description = this.category.description;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async saveCategory(){
    await this.api.updateCategory(this.category._id, this.category)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  async deleteCategory(){
    await this.api.deleteCategory(this.category._id)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  async getProducts() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getProducts()
      .subscribe(res => {
        console.log(res);
        this.products = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  save() {

    console.log(this.description);
    console.log(this.title);
    console.log(this.category._id);

    this.category.title = this.title;
    this.category.description = this.description;

    this.saveCategory();

  }

  delete() {

    this.deleteCategory();
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    this.getProducts();
    console.log("Current id: " + this.id);
    this.getCategory(this.id);
    
  }
}

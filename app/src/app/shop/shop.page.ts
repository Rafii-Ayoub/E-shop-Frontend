import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  shop: any;
  categories: any;
  result: any;
  api: RestService;
  id: string;
  title: string;
  description: string;
  shopID: string;

  constructor(public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router) {

    this.api = restapi;

  }

  async getShop(id: any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getShop(this.id)
      .subscribe(res => {
        console.log(res);
        this.shop = res;
        this.title = this.shop.title;
        this.description = this.shop.description;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async saveShop() {
    await this.api.updateShop(this.shop._id, this.shop)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  async deleteShop() {
    await this.api.deleteShop(this.shop._id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  async getCategories() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getCategories()
      .subscribe(res => {
        console.log(res);
        this.categories = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  save() {

    console.log(this.description);
    console.log(this.title);
    console.log(this.shop._id);

    this.shop.title = this.title;
    this.shop.description = this.description;

    this.saveShop();

  }

  delete() {

    this.deleteShop();

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.getCategories();
    console.log("Current id: " + this.id);
    this.getShop(this.id);

  }
}

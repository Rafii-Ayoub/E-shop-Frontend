import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shop-add',
  templateUrl: './shop-add.page.html',
  styleUrls: ['./shop-add.page.scss'],
})
export class Shop_addPage implements OnInit {

  private shop : FormGroup;
  api : RestService;
  

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
    public router : Router,
    public formBuilder: FormBuilder) {
      this.shop = this.formBuilder.group({
        title: [''],
        description: [''],
      });

    this.api = restapi;

  }

  async saveShop(){
    await this.api.createShop(this.shop.value)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  

  save() {
    console.log(this.shop.value);
    this.saveShop();

  }


  ngOnInit() {
    
  }
}

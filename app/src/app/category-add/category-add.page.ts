import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.page.html',
  styleUrls: ['./category-add.page.scss'],
})
export class Category_addPage implements OnInit {

  private category : FormGroup;
  private category2 : FormGroup;
  api : RestService;
  id : string;
  title : string;
  description : string;
  

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
    public router : Router,
    public formBuilder: FormBuilder) {
      this.category = this.formBuilder.group({
        boutiqueID: [this.id] ,
        title: [''],
        description: [''],
      });
    this.api = restapi;

  }

  async saveCategory(){
    await this.api.createCategory(this.category.value)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  

  save() {
    console.log(this.id);
    this.description = this.category.value.description;
    this.title = this.category.value.title;
    console.log(this.description);
    this.category.setValue({shopID: this.id, title: this.title, description: this.description})
    console.log(this.category.value);
    

    this.saveCategory();

  }


  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
  }
}

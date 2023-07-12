import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';
import { ProductgrowntypeserviceService } from 'src/app/services/http/products/productgrowntype/productgrowntypeservice.service';

@Component({
  selector: 'app-foodstand',
  templateUrl: './foodstand.component.html',
  styleUrls: ['./foodstand.component.css']
})
export class FoodstandComponent {

  public productGrownItems! : ProductFoodGrown[];

  constructor(private _router: Router, private productGrownTypeService : ProductgrowntypeserviceService) {
    this.productGrownItems = productGrownTypeService.read_all();
  }
  sellfoodButtonClick(){
    this._router.navigate(['sellfood'])
  }
  changeimageButtonClick(){
    this._router.navigate(['sellfood'])
  }
}

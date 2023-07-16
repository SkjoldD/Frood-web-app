import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Foodstand } from 'src/app/classes/foodstands/foodstand';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';
import { ProductgrowntypeserviceService } from 'src/app/services/http/products/productgrowntype/productgrowntypeservice.service';

@Component({
  selector: 'app-foodstand',
  templateUrl: './foodstand.component.html',
  styleUrls: ['./foodstand.component.css']
})
export class FoodstandComponent {

  @Input() foodstand! : Foodstand;

  public productGrownItems! : ProductFoodGrown[];
  public hasActiveItems : boolean = false;
  public hasEmptyItems : boolean = false;

  constructor(private _router: Router) {
   
  }
  sellfoodButtonClick(){
    this._router.navigate(['sellfood'])
  }
  changeimageButtonClick(){
    this._router.navigate(['sellfood'])
  }

  HasActiveItems(){
    this.productGrownItems.forEach(grownTypeElement => {
       if (grownTypeElement.amount > 0)
       {
         this.hasActiveItems = true;
         return;
       }
       this.hasActiveItems = false;
    });


    return this.hasActiveItems;
  }

  HasEmptyItems(){

    this.productGrownItems.forEach(grownTypeElement => {
      if (grownTypeElement.amount == 0)
      {
        this.hasEmptyItems = true;
        return;
      }
      else{
        this.hasEmptyItems = false;

      }
   });



   return this.hasEmptyItems;
  }
}

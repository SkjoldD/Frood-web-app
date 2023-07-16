import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Foodstand } from 'src/app/classes/foodstands/foodstand';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';
import { ProductgrowntypeserviceService } from 'src/app/services/http/products/productgrowntype/productgrowntypeservice.service';
import { SelectedFoodstandService } from 'src/app/services/selected/foodstand/selected-foodstand.service';

@Component({
  selector: 'app-foodstand',
  templateUrl: './foodstand.component.html',
  styleUrls: ['./foodstand.component.css']
})
export class FoodstandComponent {

  public foodstand! : Foodstand;

  public hasActiveItems : boolean = false;
  public hasEmptyItems : boolean = false;

  constructor(private _router: Router, private _selectedFoodstandService : SelectedFoodstandService) {
    this._selectedFoodstandService.selectedFoodstand.subscribe(val => {this.foodstand = val; console.log(this.foodstand); console.log("test");});
    
  }

  ngOnInit() {

    //this.foodstand = this._selectedFoodstandService.GetFoodstand();
  } 

  sellfoodButtonClick(){
    this._router.navigate(['sellfood'])
  }
  changeimageButtonClick(){
    this._router.navigate(['sellfood'])
  }

  HasActiveItems(){
    this.foodstand.productsFoodGrown.forEach(grownTypeElement => {
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

    this.foodstand.productsFoodGrown.forEach(grownTypeElement => {
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

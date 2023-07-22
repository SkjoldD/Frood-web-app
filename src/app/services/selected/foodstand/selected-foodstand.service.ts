import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GrownType } from 'src/app/classes/enums/growntype';
import { Foodstand } from 'src/app/classes/foodstands/foodstand';
import { Location } from 'src/app/classes/general/location';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';

@Injectable({
  providedIn: 'root'
})
export class SelectedFoodstandService {

  public foodstand! : Foodstand//= new Foodstand(-1,new Location(-1,0,"","","",""),new Date(), "","", [new ProductFoodGrown(-1,GrownType.Apple,"",0)]);
  public selectedFoodstand = new BehaviorSubject<Foodstand>(this.foodstand);

  constructor() { 

  }


  SetFoodstand(newFoodstand : Foodstand){
    this.selectedFoodstand.next(newFoodstand);
  }

  AddToFoodstand(product : ProductFoodGrown){
      this.selectedFoodstand.value.productsFoodGrown.push(product);
  }
  

}

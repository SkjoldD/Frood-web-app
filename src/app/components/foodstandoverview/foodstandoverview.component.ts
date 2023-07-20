import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Foodstand } from 'src/app/classes/foodstands/foodstand';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';
import { FoodstandService } from 'src/app/services/http/foodstand/foodstand.service';
import { SelectedFoodstandService } from 'src/app/services/selected/foodstand/selected-foodstand.service';
import { GrowntypeHelperServiceService } from 'src/app/services/utilities/helper/growntype-helper-service.service';

@Component({
  selector: 'app-foodstandoverview',
  templateUrl: './foodstandoverview.component.html',
  styleUrls: ['./foodstandoverview.component.css']
})

export class FoodstandoverviewComponent {
  popup =false;
  name = 'Angular';
  
  foodstands! : Foodstand[];

  constructor(private _router: Router, private _grownTypeHelperService : GrowntypeHelperServiceService, private _foodstandService:FoodstandService, private _selectedFoodstandService : SelectedFoodstandService){
  this.foodstands = _foodstandService.read_all();
  }
  
  GetRelatedImage(grownItem : ProductFoodGrown){
    //return _grownTypeHelperService.G
    return this._grownTypeHelperService.GetProductImage(grownItem.grownType);
  }

  FoodstandButtonClick(foodstand: Foodstand){
    this._selectedFoodstandService.selectedFoodstand.next(foodstand);
    this._router.navigate(['foodstand'])
  }

  CreatefoodstandButtonClick(){
    this._router.navigate(['createfoodstand'])
  }

  



}

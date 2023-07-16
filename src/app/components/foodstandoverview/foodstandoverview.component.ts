import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Foodstand } from 'src/app/classes/foodstands/foodstand';
import { FoodstandService } from 'src/app/services/http/foodstand/foodstand.service';
import { SelectedFoodstandService } from 'src/app/services/selected/foodstand/selected-foodstand.service';

@Component({
  selector: 'app-foodstandoverview',
  templateUrl: './foodstandoverview.component.html',
  styleUrls: ['./foodstandoverview.component.css']
})

export class FoodstandoverviewComponent {

  foodstands! : Foodstand[];

  constructor(private _router: Router, private _foodstandService:FoodstandService, private _selectedFoodstandService : SelectedFoodstandService){
  this.foodstands = _foodstandService.read_all();
  }
  


  FoodstandButtonClick(foodstand: Foodstand){
    this._selectedFoodstandService.selectedFoodstand.next(foodstand);
    this._router.navigate(['foodstand'])
  }


}

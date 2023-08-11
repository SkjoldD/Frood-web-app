import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Foodstand } from 'src/app/classes/foodstands/foodstand';
import { FoodstandService } from 'src/app/services/http/foodstand/foodstand.service';

@Component({
  selector: 'app-foodstandoverview',
  templateUrl: './foodstandoverview.component.html',
  styleUrls: ['./foodstandoverview.component.css']
})

export class FoodstandoverviewComponent {
  constructor(
    private _foodstandService: FoodstandService,
    private _router: Router) {
    this.foodstands = this._foodstandService.read_all();
  }

  foodstands!: Foodstand[];

  CreatefoodstandButtonClick() {
    this._router.navigate(['createfoodstand'])
  }

  ProfileButtonClick() {
    this._router.navigate(['profile'])
  }

  StartingpageButtonClick() {
    this._router.navigate(['startingpage'])
  }
}

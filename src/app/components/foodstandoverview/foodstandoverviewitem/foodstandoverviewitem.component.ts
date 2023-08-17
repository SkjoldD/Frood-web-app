import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Foodstand } from 'src/app/classes/foodstands/foodstand';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';
import { ModalServiceService } from 'src/app/services/pop-up/modal-service.service';
import { SelectedFoodstandService } from 'src/app/services/selected/foodstand/selected-foodstand.service';
import { GrowntypeHelperServiceService } from 'src/app/services/utilities/helper/growntype-helper-service.service';

@Component({
  selector: 'app-foodstandoverviewitem',
  templateUrl: './foodstandoverviewitem.component.html',
  styleUrls: ['./foodstandoverviewitem.component.css']
})

export class FoodstandoverviewitemComponent implements OnInit {

  constructor(private _modalserviceservice: ModalServiceService,
    private _router: Router,
    private _grownTypeHelperService: GrowntypeHelperServiceService,
    private _selectedFoodstandService: SelectedFoodstandService) {

  }

  @Input() foodstand!: Foodstand;
  @Input() foodstands!: Foodstand[];
  @Output() foodstandsChange = new EventEmitter<Foodstand[]>();


  ngOnInit(): void {
    this._modalserviceservice.add(this.foodstand.name);
  }

  DeleteFoodstand() {
    this._modalserviceservice.open(this.foodstand.name)
    //const index = this.foodstands.indexOf(foodstand, 0);
    //if (index > -1) {
    //this.foodstands.splice(index, 1);
    // }  
  }

  GetRelatedImage(grownItem: ProductFoodGrown) {
    //return _grownTypeHelperService.G
    return this._grownTypeHelperService.GetProductImage(grownItem.grownType);
  }

  FoodstandButtonClick(foodstand: Foodstand) {
    this._selectedFoodstandService.selectedFoodstand.next(foodstand);
    this._router.navigate(['foodstand'])
  }

  EditfoodstandClick() {
    this._router.navigate(['foodstand'])
  }

}

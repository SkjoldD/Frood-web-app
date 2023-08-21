import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Foodstand } from 'src/app/classes/foodstands/foodstand';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';
import { FoodstandService } from 'src/app/services/http/foodstand/foodstand.service';
import { ModalServiceService } from 'src/app/services/pop-up/modal-service.service';
import { GrowntypeHelperServiceService } from 'src/app/services/utilities/helper/growntype-helper-service.service';

@Component({
  selector: 'app-popupfoodstandcontent',
  templateUrl: './popupfoodstandcontent.component.html',
  styleUrls: ['./popupfoodstandcontent.component.css']
})
export class PopupfoodstandcontentComponent implements OnInit {
  @Input() foodstand!: Foodstand;
  @Input() foodstands!: Foodstand[];
  @Output() foodstandsChange = new EventEmitter<Foodstand[]>();

  ngOnInit(): void {
    this._modalserviceservice.add(this.foodstand.name);
  }

  constructor(
    private _modalserviceservice: ModalServiceService, 
    private _grownTypeHelperService: GrowntypeHelperServiceService,
    private _foodstandService: FoodstandService) {
      
      this.foodstands = this._foodstandService.read_all();
  }
  
  GetRelatedImage(grownItem: ProductFoodGrown) {
    //return _grownTypeHelperService.
    return this._grownTypeHelperService.GetProductImage(grownItem.grownType);
  }

  Growntypeinfo() {
    this._modalserviceservice.open(this.foodstand.name)
    console.log("Further info on growntype")
    //const index = this.foodstands.indexOf(foodstand, 0);
    //if (index > -1) {
    //this.foodstands.splice(index, 1);
    // }  
  }
  
}

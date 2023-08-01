import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';
import { GrowntypeHelperServiceService } from 'src/app/services/utilities/helper/growntype-helper-service.service';

@Component({
  selector: 'app-foodstand-product-grown-item-soldout',
  templateUrl: './foodstand-product-grown-item-soldout.component.html',
  styleUrls: ['./foodstand-product-grown-item-soldout.component.css']
})
export class FoodstandProductGrownItemSoldoutComponent implements OnInit {

  @Input() grownItem!: ProductFoodGrown;

  constructor(private _router: Router, private _grownTypeHelperService: GrowntypeHelperServiceService) {
  }

  ngOnInit(): void {
  }

  PutOnSaleButtonClick() {
    this.grownItem.amount = 1;
  }

  GetRelatedImage(grownItem: ProductFoodGrown) {
    //return _grownTypeHelperService.G
    return this._grownTypeHelperService.GetImage(grownItem.grownType);
  }

  GetRelatedName(grownItem: ProductFoodGrown) {
    return this._grownTypeHelperService.GetName(grownItem.grownType);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';
import { GrowntypeHelperServiceService } from 'src/app/services/utilities/helper/growntype-helper-service.service';

@Component({
  selector: 'app-foodstand-product-grown-item',
  templateUrl: './foodstand-product-grown-item.component.html',
  styleUrls: ['./foodstand-product-grown-item.component.css']
})
export class FoodstandProductGrownItemComponent implements OnInit {

  @Input() grownItem!: ProductFoodGrown;

  constructor(private _router: Router, private _grownTypeHelperService: GrowntypeHelperServiceService) {
  }

  ngOnInit(): void {
  }

  GetRelatedImage(grownItem: ProductFoodGrown) {
    //return _grownTypeHelperService.G
    return this._grownTypeHelperService.GetImage(grownItem.grownType);
  }

  GetRelatedName(grownItem: ProductFoodGrown) {
    return this._grownTypeHelperService.GetName(grownItem.grownType);
  }
  AnnounceSold() {
    this.grownItem.amount = 0;
  }
}

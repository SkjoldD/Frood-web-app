import { Injectable } from '@angular/core';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';
import { GrownType } from 'src/app/classes/enums/growntype';


@Injectable({
  providedIn: 'root'
})
export class ProductgrowntypeserviceService {

  private productGrownItems : ProductFoodGrown[] = [];

  private productGrownItem1! : ProductFoodGrown;
  private productGrownItem2! : ProductFoodGrown;
  private productGrownItem3! : ProductFoodGrown;
  private productGrownItem4! : ProductFoodGrown;
  private productGrownItem5! : ProductFoodGrown;

  constructor() { }

  read_all()
  { 
    this.productGrownItem1 = new ProductFoodGrown(-1,GrownType.Carrot,"10 Kg",1);
    this.productGrownItem2 = new ProductFoodGrown(-1,GrownType.Pear,"5 Kg",9);
    this.productGrownItem3 = new ProductFoodGrown(-1,GrownType.Potato,"17 Kg",10);
    this.productGrownItem4 = new ProductFoodGrown(-1,GrownType.Strawberry,"1 Bakke", 0);
    this.productGrownItem5 = new ProductFoodGrown(-1,GrownType.Potato,"123123 Kg",3);

    this.productGrownItems.push(this.productGrownItem1);
    this.productGrownItems.push(this.productGrownItem2);
    this.productGrownItems.push(this.productGrownItem3);
    this.productGrownItems.push(this.productGrownItem4);
    this.productGrownItems.push(this.productGrownItem5);

    return this.productGrownItems;

  }
}

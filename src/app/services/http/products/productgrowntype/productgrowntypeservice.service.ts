import { Injectable } from '@angular/core';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';

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
    this.productGrownItem1 = new ProductFoodGrown(-1,"Gulerod","10 Kg",3);
    this.productGrownItem2 = new ProductFoodGrown(-1,"Æble","5 Kg",9);
    this.productGrownItem3 = new ProductFoodGrown(-1,"Kartofler","17 Kg",20);
    this.productGrownItem4 = new ProductFoodGrown(-1,"Kirsebær","1 Bakke", 5);
    this.productGrownItem5 = new ProductFoodGrown(-1,"lart","123123 Kg",3);

    this.productGrownItems.push(this.productGrownItem1);
    this.productGrownItems.push(this.productGrownItem2);
    this.productGrownItems.push(this.productGrownItem3);
    this.productGrownItems.push(this.productGrownItem4);
    this.productGrownItems.push(this.productGrownItem5);

    return this.productGrownItems;

  }
}

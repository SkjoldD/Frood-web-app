import { Injectable } from '@angular/core';
import { GrownType } from 'src/app/classes/enums/growntype';
import { Foodstand } from 'src/app/classes/foodstands/foodstand';
import { Location } from 'src/app/classes/general/location';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';

@Injectable({
  providedIn: 'root'
})
export class FoodstandService {

  private foodstands : Foodstand[] = [];
    
  constructor() {
    const productGrownItems = [];

    const productGrownItem1 = new ProductFoodGrown(-1,GrownType.Carrot,"10 Kg",1);
    const productGrownItem2 = new ProductFoodGrown(-1,GrownType.Pear,"5 Kg",9);
    const productGrownItem3 = new ProductFoodGrown(-1,GrownType.Potato,"17 Kg",10);
    const productGrownItem4 = new ProductFoodGrown(-1,GrownType.Strawberry,"1 Bakke", 0);
    const productGrownItem5 = new ProductFoodGrown(-1,GrownType.Potato,"123123 Kg",3);
    const productGrownItem6 = new ProductFoodGrown(-1,GrownType.Potato,"123123 Kg",3);
    const productGrownItem7 = new ProductFoodGrown(-1,GrownType.Potato,"123123 Kg",3);
    const productGrownItem8 = new ProductFoodGrown(-1,GrownType.Potato,"123123 Kg",3);
    const productGrownItem9 = new ProductFoodGrown(-1,GrownType.Potato,"123123 Kg",3);
    const productGrownItem10 = new ProductFoodGrown(-1,GrownType.Potato,"123123 Kg",3);
    const productGrownItem11 = new ProductFoodGrown(-1,GrownType.Potato,"123123 Kg",3);

    productGrownItems.push(productGrownItem1);
    productGrownItems.push(productGrownItem2);
    productGrownItems.push(productGrownItem3);
    productGrownItems.push(productGrownItem4);
    productGrownItems.push(productGrownItem5);
    productGrownItems.push(productGrownItem6);
    productGrownItems.push(productGrownItem7);
    productGrownItems.push(productGrownItem8);
    productGrownItems.push(productGrownItem9);
    productGrownItems.push(productGrownItem10);
    productGrownItems.push(productGrownItem11);

    const locationA = new Location(-1, 3600, "Denmark", "Frederikssund", "Erantisvej", "5");

    const foodstandA = new Foodstand(1, locationA, new Date(Date.now.toString()), "Skjolds madbod", "mega fed madbod uden noget mad", productGrownItems)


    const productGrownItemsB = [];

    const productGrownItemB1 = new ProductFoodGrown(-1,GrownType.Pear,"10 Kg",1);
    const productGrownItemB2 = new ProductFoodGrown(-1,GrownType.Pear,"5 Kg",9);
    const productGrownItemB3 = new ProductFoodGrown(-1,GrownType.Pear,"17 Kg",10);
    const productGrownItemB4 = new ProductFoodGrown(-1,GrownType.Pear,"1 Bakke", 0);
    const productGrownItemB5 = new ProductFoodGrown(-1,GrownType.Potato,"123123 Kg",3);

    productGrownItemsB.push(productGrownItemB1);
    productGrownItemsB.push(productGrownItemB2);
    productGrownItemsB.push(productGrownItemB3);
    productGrownItemsB.push(productGrownItemB4);
    productGrownItemsB.push(productGrownItemB5);

    const locationB = new Location(-1, 3600, "Denmark", "Frederiksværk", "Et eller andet sted", "5");

    const foodstandB = new Foodstand(1, locationB, new Date(Date.now.toString()), "Merles madbod", "Ikke så cool som skjolds", productGrownItemsB)

    const productGrownItemsC = [];

    const productGrownItemC1 = new ProductFoodGrown(-1,GrownType.Potato,"10 Kg",1);
    const productGrownItemC2 = new ProductFoodGrown(-1,GrownType.Potato,"5 Kg",9);
    const productGrownItemC3 = new ProductFoodGrown(-1,GrownType.Potato,"17 Kg",10);
    const productGrownItemC4 = new ProductFoodGrown(-1,GrownType.Potato,"1 Bakke", 0);
    const productGrownItemC5 = new ProductFoodGrown(-1,GrownType.Potato,"123123 Kg",3);

    productGrownItemsC.push(productGrownItemC1);
    productGrownItemsC.push(productGrownItemC2);
    productGrownItemsC.push(productGrownItemC3);
    productGrownItemsC.push(productGrownItemC4);
    productGrownItemsC.push(productGrownItemC5);

    const locationC = new Location(-1, 3600, "Space", "Sun", "Flare", "10");

    const foodstandC = new Foodstand(1, locationC, new Date(Date.now.toString()), "Potato madman madbod med et meget langt navn hah, se hvad du vil gøre her smerl", "so much potato and a very long long long long description jadajdajdajdajdja", productGrownItemsC)

    this.foodstands.push(foodstandA);
    this.foodstands.push(foodstandB);
    this.foodstands.push(foodstandC);
   }

  read_all()
  {
    


    return this.foodstands;


  }
}

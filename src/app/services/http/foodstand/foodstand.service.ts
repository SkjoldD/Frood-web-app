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

    const productGrownItem1 = new ProductFoodGrown(-1,GrownType.Carrot,10);
    const productGrownItem2 = new ProductFoodGrown(-1,GrownType.Pear,5, 12);
    const productGrownItem3 = new ProductFoodGrown(-1,GrownType.Potato,17, 10);
    const productGrownItem4 = new ProductFoodGrown(-1,GrownType.Strawberry,1, 0);
    const productGrownItem5 = new ProductFoodGrown(-1,GrownType.Potato,12,3);
    const productGrownItem6 = new ProductFoodGrown(-1,GrownType.Potato,6,3);
    const productGrownItem7 = new ProductFoodGrown(-1,GrownType.Potato,0,3);
    const productGrownItem8 = new ProductFoodGrown(-1,GrownType.Potato,123,3);
    const productGrownItem9 = new ProductFoodGrown(-1,GrownType.Potato,123123123,3);
    const productGrownItem10 = new ProductFoodGrown(-1,GrownType.Potato,14,3);
    const productGrownItem11 = new ProductFoodGrown(-1,GrownType.Potato,13,3);

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

    const locationA = new Location(-1, 3600, "Denmark", "Frederikssund", "Erantisvej", "5", { lat: 55.840750705472225, lng: 12.07848508178017 });

    const foodstandA = new Foodstand(1, locationA, new Date(Date.now.toString()), "Skjolds madbod", "mega fed madbod uden noget mad", productGrownItems)


    const productGrownItemsB = [];

    const productGrownItemB1 = new ProductFoodGrown(-1,GrownType.Pear,10,1);
    const productGrownItemB2 = new ProductFoodGrown(-1,GrownType.Pear,5 ,9);
    const productGrownItemB3 = new ProductFoodGrown(-1,GrownType.Pear,17,10);
    const productGrownItemB4 = new ProductFoodGrown(-1,GrownType.Pear,1, 0);
    const productGrownItemB5 = new ProductFoodGrown(-1,GrownType.Potato,133,3);

    productGrownItemsB.push(productGrownItemB1);
    productGrownItemsB.push(productGrownItemB2);
    productGrownItemsB.push(productGrownItemB3);
    productGrownItemsB.push(productGrownItemB4);
    productGrownItemsB.push(productGrownItemB5);

    const locationB = new Location(-1, 3300, "Denmark", "Frederiksværk", "Hanehovedvej", "95", { lat: 55.972887102645274, lng: 11.99837939302953 });

    const foodstandB = new Foodstand(1, locationB, new Date(Date.now.toString()), "Merles madbod", "Ikke så cool som skjolds", productGrownItemsB)

    const productGrownItemsC = [];

    const productGrownItemC1 = new ProductFoodGrown(-1,GrownType.Potato,10,1);
    const productGrownItemC2 = new ProductFoodGrown(-1,GrownType.Potato,5,9);
    const productGrownItemC3 = new ProductFoodGrown(-1,GrownType.Potato,17,10);
    const productGrownItemC4 = new ProductFoodGrown(-1,GrownType.Potato,1 , 0);
    const productGrownItemC5 = new ProductFoodGrown(-1,GrownType.Potato,1231,3);

    productGrownItemsC.push(productGrownItemC1);
    productGrownItemsC.push(productGrownItemC2);
    productGrownItemsC.push(productGrownItemC3);
    productGrownItemsC.push(productGrownItemC4);
    productGrownItemsC.push(productGrownItemC5);

    const locationC = new Location(-1, 3100, "Space", "Sun", "Flare", "10", { lat: 55.93675559724282, lng: 12.118635796231176 });

    const foodstandC = new Foodstand(1, locationC, new Date(Date.now.toString()), "Potato madman madbod med et meget langt navn hah, se hvad du vil gøre her smerl", "so much potato and a very long long long long description jadajdajdajdajdja", productGrownItemsC)

    const productGrownItemsD = [];

    const productGrownItemD1 = new ProductFoodGrown(-1,GrownType.Strawberry,13,1);
    const productGrownItemD2 = new ProductFoodGrown(-1,GrownType.Pear,5,6);
    const productGrownItemD3 = new ProductFoodGrown(-1,GrownType.Carrot,12,10);
    const productGrownItemD4 = new ProductFoodGrown(-1,GrownType.Cherry, 5, 0);
    const productGrownItemD5 = new ProductFoodGrown(-1,GrownType.Potato,11,3);

    productGrownItemsD.push(productGrownItemD1);
    productGrownItemsD.push(productGrownItemD2);
    productGrownItemsD.push(productGrownItemD3);
    productGrownItemsD.push(productGrownItemD4);
    productGrownItemsD.push(productGrownItemD5);

    const locationD = new Location(-1, 2500, "Denmark", "Valby", "Søndervangs Allé", "14th", { lat: 55.65522302236168, lng:  12.497355409831249 });

    const foodstandD = new Foodstand(1, locationD, new Date(Date.now.toString()), "Deivids' Honey Booth", "Just sellin' some good ol' honey", productGrownItemsD)

    this.foodstands.push(foodstandA);
    this.foodstands.push(foodstandB);
    this.foodstands.push(foodstandC);
    this.foodstands.push(foodstandD);
   }

  read_all()
  {
    


    return this.foodstands;


  }
}

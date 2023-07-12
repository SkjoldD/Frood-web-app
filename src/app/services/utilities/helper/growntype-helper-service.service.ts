import { Injectable } from '@angular/core';
import { GrownType } from 'src/app/classes/enums/growntype';

@Injectable({
  providedIn: 'root'
})
export class GrowntypeHelperServiceService {

  constructor() { }

  public GetImage(_grownType : GrownType){

    if (_grownType == GrownType.Carrot){
      return "assets/food-animations/carrot-basket.png";
    }
    
    if (_grownType == GrownType.Strawberry){
      return "assets/food-animations/strawberry-basket.png";
    }
    
    if (_grownType == GrownType.Potato){
      return "assets/food-animations/potato-basket.png";
    }
    
    if (_grownType == GrownType.Pear){
      return "assets/food-animations/pear-basket.png";
    }

    if (_grownType == GrownType.Apple){
      return "assets/food-animations/apple-basket.png";
    }

    return "Nothing found"

  }

  public GetName(_grownType : GrownType){
    if (_grownType == GrownType.Potato){
      return "Kartoffel";
    }
    if (_grownType == GrownType.Apple){
      return "Æble";
    }
    if (_grownType == GrownType.Carrot){
      return "Gulerod";
    }
    if (_grownType == GrownType.Cherry){
      return "Kirsebær";
    }
    if (_grownType == GrownType.Pear){
      return "Pære";
    }
    if (_grownType == GrownType.Strawberry){
      return "Jordbær";
    }

    return "No name found";
  }


}

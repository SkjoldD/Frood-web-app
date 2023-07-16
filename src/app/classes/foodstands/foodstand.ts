import { ProductFoodGrown } from '../product-food-grown';
import { Location } from './../general/location';

export class Foodstand {

 public constructor(
        private _id : number = -1, 
        private _location : Location,
        private _dateCreated : Date,
        private _name : string = "",
        private _description : string = "",
        private _productsFoodGrown : ProductFoodGrown[] = [],
        ){

    }

    get id(): number{return this._id;}
    set id(_val : number){this._id = _val;}

    get location(): Location{return this._location;}
    set location(_val : Location){this._location = _val;}
    
    get dateCreated(): Date{return this._dateCreated; this.dateCreated.toString()}
    set dateCreated(_val : Date){this._dateCreated = _val;}

    get name(): string{return this._name;}
    set name(_val : string){this._name = _val;}

    get description(): string{return this._description;}
    set description(_val : string){this._description = _val;}

    get productsFoodGrown(): ProductFoodGrown[]{return this._productsFoodGrown;}
    set productsFoodGrown(_val : ProductFoodGrown[]){this._productsFoodGrown = _val;}
}

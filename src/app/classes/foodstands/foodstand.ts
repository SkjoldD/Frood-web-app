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
        private _paymentmethodMobilepay : boolean = false,
        private _paymentmethodCash : boolean = false, 
        private _displayPhoneNumber : boolean = false,
        private _active: boolean = true
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

    get paymentmethodMobilepay(): boolean{return this._paymentmethodMobilepay;}
    set paymentmethodMobilepay(_val : boolean){this._paymentmethodMobilepay = _val;}

    get paymentmethodCash(): boolean{return this._paymentmethodCash;}
    set paymentmethodCash(_val : boolean){this._paymentmethodCash = _val;}

    get displayPhoneNumber(): boolean{return this._displayPhoneNumber;}
    set displayPhoneNumber(_val : boolean){this._displayPhoneNumber = _val;}

    get active(): boolean{return this._active;}
    set active(_val : boolean){this._active = _val;}

    DeepClone(foodstand : Foodstand){
        let clone = new Foodstand(
            foodstand.id, 
            foodstand.location, 
            foodstand.dateCreated, 
            foodstand.name, 
            foodstand.description, 
            foodstand.productsFoodGrown, 
            foodstand.paymentmethodMobilepay, 
            foodstand.paymentmethodCash, 
            foodstand.displayPhoneNumber, 
            foodstand.active );

            return clone
    }
}



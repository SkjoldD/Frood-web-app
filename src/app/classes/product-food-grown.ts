import { GrownType } from './enums/growntype';
import { ProductUnitTypes } from './enums/product-unit-types';

export class ProductFoodGrown {

    public constructor(
        private _id : number = -1, 
        private _grownType : GrownType = GrownType.Carrot,
        private _amount? : number,
        private _price? : number,
        private _endofactivetime : Date = new Date(),
        private _filename : string = "",
        private _comment : string = "",
        private _tags : string[] = [],
        private _unit : ProductUnitTypes = ProductUnitTypes.Kilogram
        ){
    }

    get id(): number{return this._id;}
    set id(_val : number){this._id = _val;}

    get grownType(): GrownType{return this._grownType;}
    set grownType(_val : GrownType){this._grownType = _val;}

    get amount(): number{return Number(this._amount);}
    set amount(_val : number){this._amount = _val;}

    get unit(): ProductUnitTypes{return (this._unit);}
    set unit(_val : ProductUnitTypes){this._unit = _val;}

    get price(): number{return Number(this._price);}
    set price(_val : number){this._price = _val;}

    get endofactivetime(): Date{return this._endofactivetime;}
    set endofactivetime(_val : Date){this._endofactivetime = _val;}

    get filename(): string{return this._filename;}
    set filename(_val : string){this._filename = _val;}

    get comment(): string{return this._comment;}
    set comment(_val : string){this._comment = _val;}
    
    get tags(): string[]{return this._tags;}
    set tags(_val : string[]){this._tags = _val;}

    
}

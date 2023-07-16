export class Location {

    public constructor(
        private _id : number = -1, 
        private _zipCode : number = -1,
        private _country : string = "",
        private _city : string = "",
        private _streetName : string = "",
        private _streetNumber : string = "",
        ){

    }

    get id(): number{return this._id;}
    set id(_val : number){this._id = _val;}

    get zipCode(): number{return this._zipCode;}
    set zipCode(_val : number){this._zipCode = _val;}
    
    get country(): string{return this._country;}
    set country(_val : string){this._country = _val;}

    get city(): string{return this._city;}
    set city(_val : string){this._city = _val;}

    get streetName(): string{return this._streetName;}
    set streetName(_val : string){this._streetName = _val;}

    get streetNumber(): string{return this._streetNumber;}
    set streetNumber(_val : string){this._streetNumber = _val;}
}

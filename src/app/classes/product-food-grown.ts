export class ProductFoodGrown {
    public constructor(
        private _id : number = -1, 
        private _grownType : string = "",
        private _size : string = "",
        private _amount : number = 0
        ){
    }

    get id(): number{return this._id;}
    set id(_val : number){this._id = _val;}

    get grownType(): string{return this._grownType;}
    set grownType(_val : string){this._grownType = _val;}
    
    get size(): string{return this._size;}
    set size(_val : string){this._size = _val;}

    get amount(): number{return this._amount;}
    set amount(_val : number){this._amount = _val;}
}

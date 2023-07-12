import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';

@Component({
  selector: 'app-foodstand-product-grown-item',
  templateUrl: './foodstand-product-grown-item.component.html',
  styleUrls: ['./foodstand-product-grown-item.component.css']
})
export class FoodstandProductGrownItemComponent implements OnInit{

  @Input() grownItem! : ProductFoodGrown;

  constructor(private _router : Router){
  }

  ngOnInit(): void {
  }

  sellfoodButtonClick(){
    this._router.navigate(['sellfood'])
  }
}

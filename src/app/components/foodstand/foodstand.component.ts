import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodstand',
  templateUrl: './foodstand.component.html',
  styleUrls: ['./foodstand.component.css']
})
export class FoodstandComponent {
  constructor(private _router: Router) {
    
  }
  sellfoodButtonClick(){
    this._router.navigate(['sellfood'])
  }
  changeimageButtonClick(){
    this._router.navigate(['sellfood'])
  }
}

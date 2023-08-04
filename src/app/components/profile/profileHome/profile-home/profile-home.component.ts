import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent {
  constructor(private _router: Router) {
  }

  FoodstandoverviewButtonClick() {
    this._router.navigate(['foodstandOverview'])
  }

}

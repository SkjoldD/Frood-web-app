import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  constructor(private _router: Router) {
    
  }
  
  loginButtonClick(){
    this._router.navigate(['startingpage'])
  }

  hide = true;
}



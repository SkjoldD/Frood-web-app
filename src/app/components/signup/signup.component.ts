import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  constructor(private _router: Router) {
    
  }
  
  assignButtonClick(){
    this._router.navigate(['startingpage'])
  }
  sellfoodButtonClick(){
    this._router.navigate(['sellfood'])
  }
}

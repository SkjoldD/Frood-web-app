import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Animal {
  name: string;
}

@Component({
  selector: 'app-sellfood',
  templateUrl: './sellfood.component.html',
  styleUrls: ['./sellfood.component.css']
})


export class SellfoodComponent {
  animalControl = new FormControl<Animal | null>(null, Validators.required);


  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Æble'},
    {name: 'Pære'},
    {name: 'Hindbær'},
    {name: 'Jordbær'},
  ];
}

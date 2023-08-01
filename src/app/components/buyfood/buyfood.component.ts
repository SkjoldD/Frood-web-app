import { Component } from '@angular/core';


@Component({
  selector: 'app-buyfood',
  templateUrl: './buyfood.component.html',
  styleUrls: ['./buyfood.component.css']
})
export class BuyfoodComponent {
  disabled = false;
  max = 500;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  }

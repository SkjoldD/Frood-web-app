import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import {ThemePalette} from '@angular/material/core';
import { MatRadioChange } from '@angular/material/radio';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';
import { GrownType } from 'src/app/classes/enums/growntype';
import { SelectedFoodstandService } from 'src/app/services/selected/foodstand/selected-foodstand.service';
import { ProductUnitTypes } from 'src/app/classes/enums/product-unit-types';
import { Endofactivetime } from 'src/app/classes/enums/endofactivetime';
import { HoursdayTransformerPipe } from 'src/app/pipes/hoursday-transformer.pipe';

interface Food {
  name: string;
}

@Component({
  selector: 'app-sellfood',
  templateUrl: './sellfood.component.html',
  styleUrls: ['./sellfood.component.css']
})



export class SellfoodComponent {
  
  grownTypes = GrownType;
  unitTypes = ProductUnitTypes;
  timeUnits = Object.values(Endofactivetime);

  foodControl = new FormControl<Food | null>(null, Validators.required);
  showPriceField : boolean = true;

  selectedEndofactivetime = 24;

  sellProductFoodGrown : ProductFoodGrown = new ProductFoodGrown();

  selectFormControl = new FormControl('', Validators.required);
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl('');
  filteredTags!: Observable<string[]>;
  allTags: string[] = [
    'Pluk selv', 
    'Plukket', 
    'Vasket', 
    'Uvasket',
    'Tæt på offentlig transport', 
    'Gratis',
    'Altid åben',
    'Hund',
    'Usprøjtet',
    'Sprøjtet',
  ];

  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);


  /*
  add(event: MatChipInputEvent): void {

    let hasElement = this.sellProductFoodGrown.tags.indexOf(event.value);  
    if (hasElement >= 0 ){
      return;
    }

    const value = (event.value || '').trim();

    // Add our tag
    if (value) {
      this.sellProductFoodGrown.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.tagCtrl.setValue(null);
  }
  */

  remove(tag: string): void {
    const index = this.sellProductFoodGrown.tags.indexOf(tag);
    
    if (index >= 0) {
      this.sellProductFoodGrown.tags.splice(index, 1);

      this.announcer.announce(`Removed ${tag}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {

    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
    
    let hasElement = this.sellProductFoodGrown.tags.indexOf(event.option.viewValue);  
    

    if (hasElement >= 0 ){
      return;
    }

    this.sellProductFoodGrown.tags.push(event.option.viewValue);
    

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
  }

    constructor(private _router: Router, 
                private selectedFoodstandService : SelectedFoodstandService) {
      this.filteredTags = this.tagCtrl.valueChanges.pipe(
        startWith(null),
        map((tag: string | null) => (tag ? this._filter(tag) : this.allTags.slice())),
      );
    }
    uploadimageButtonClick(){
      this._router.navigate([''])
    }

        
    toggleFree(event: MatSlideToggleChange){
      
      
      console.log("test");


      if (event.checked == true ){
        this.sellProductFoodGrown.price = 0;
        this.showPriceField = false;

      } 
      else{
        this.showPriceField = true; } 
     } 
     
     radioChange(event: MatRadioChange){
      
      let currentDate = new Date();
      let addedHours = Number(event.value);

      currentDate.setHours(currentDate.getHours() + addedHours);

      this.sellProductFoodGrown.endofactivetime = currentDate;

      console.log(this.sellProductFoodGrown);
     }    
     
     sharefoodButtonClick(){
      console.log(this.sellProductFoodGrown);
      // Save food
      
      this.selectedFoodstandService.AddToFoodstand(this.sellProductFoodGrown);
      // Navigate to related foodstandspage
      this._router.navigate(['foodstand']);
    }
}

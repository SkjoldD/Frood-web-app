import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';

interface Food {
  name: string;
}

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  }
};

@Component({
  selector: 'app-sellfood',
  templateUrl: './sellfood.component.html',
  styleUrls: ['./sellfood.component.css']
})


export class SellfoodComponent implements OnInit {
  foodControl = new FormControl<Food | null>(null, Validators.required);


  selectFormControl = new FormControl('', Validators.required);
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl('');
  filteredTags!: Observable<string[]>;
  tags: string[] = [];
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


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our tag
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.tagCtrl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);

      this.announcer.announce(`Removed ${tag}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
  }


  foods: Food[] = [
    {name: 'Æble'},
    {name: 'Pære'},
    {name: 'Hindbær'},
    {name: 'Jordbær'},
    {name: 'Blomme'},
    {name: 'Kirsebær'},
    {name: 'Ærter'},
    {name: 'Kartofler'},
  ];

  zoom = 12;
    center: google.maps.LatLngLiteral  = {lat: 55.6638295, lng: 12.5414299};

    markers: MarkerProperties[] = [
      { position: { lat: 48.8584, lng: 2.2945 }}, // Eiffel Tower
    ];

    options: google.maps.MapOptions = {
      zoomControl: false,
      scrollwheel: true,
      disableDoubleClickZoom: true,
      maxZoom: 24,
      minZoom: 4,
      disableDefaultUI: true
    };

    ngOnInit() {
      
      return this.geogeo();
    }

    geogeo(){
      navigator.geolocation.getCurrentPosition((position) => {

        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        
        this.markers.push({ position: { lat: this.center.lat, lng: this.center.lng }})

      }, function (e) {
        //Your error handling here
        console.log("Enable location");
      }, {
          timeout: 2000,
          enableHighAccuracy: true
      });
    }
    
    constructor(private _router: Router) {
      this.filteredTags = this.tagCtrl.valueChanges.pipe(
        startWith(null),
        map((tag: string | null) => (tag ? this._filter(tag) : this.allTags.slice())),
      );
    }
    uploadimageButtonClick(){
      this._router.navigate([''])
    }
    sharefoodButtonClick(){
      this._router.navigate(['startingpage'])
    }
    
    useMyAddress: boolean=false;
    UseMyAddress(){
      this.useMyAddress=!this.useMyAddress;
      console.log(this.useMyAddress);
    }
    
}

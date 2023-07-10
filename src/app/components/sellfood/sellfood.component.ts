import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';

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
    
    }
    uploadimageButtonClick(){
      this._router.navigate([''])
    }
    sharefoodButtonClick(){
      this._router.navigate(['startingpage'])
    }

}

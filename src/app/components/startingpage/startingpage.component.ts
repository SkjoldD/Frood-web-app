import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  }
};

@Component({
  selector: 'app-startingpage',
  templateUrl: './startingpage.component.html',
  styleUrls: ['./startingpage.component.css']
})

export class StartingpageComponent implements OnInit {

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
    navigator.geolocation
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
    basketiconButtonClick(){
      this._router.navigate(['foodstandOverview'])
    }
    
    profileiconButtonClick(){
      this._router.navigate(['profile'])
    }

    foodstandiconButtonClick(){
      this._router.navigate(['buyfood'])
    }

}

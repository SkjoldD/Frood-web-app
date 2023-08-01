import { Component, OnInit } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';
import { Router } from '@angular/router';

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  }
};

@Component({
  selector: 'app-createfoodstand',
  templateUrl: './createfoodstand.component.html',
  styleUrls: ['./createfoodstand.component.css']
})
export class CreatefoodstandComponent implements OnInit {

  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 55.6638295, lng: 12.5414299 };

  markers: MarkerProperties[] = [
    { position: { lat: 48.8584, lng: 2.2945 } }, // Eiffel Tower
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

  geogeo() {
    navigator.geolocation
    navigator.geolocation.getCurrentPosition((position) => {

      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      this.markers.push({ position: { lat: this.center.lat, lng: this.center.lng } })

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

  UploadnewfoodstandButtonClick() {
    this._router.navigate(['startingpage'])
  }

  useMyAddress: boolean = false;

  UseMyAddress() {
    this.useMyAddress = !this.useMyAddress;
    console.log(this.useMyAddress);
  }
}
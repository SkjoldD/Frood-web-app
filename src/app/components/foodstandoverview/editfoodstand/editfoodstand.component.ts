import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Foodstand } from 'src/app/classes/foodstands/foodstand';
import { FoodstandService } from 'src/app/services/http/foodstand/foodstand.service';

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  }
};

@Component({
  selector: 'app-editfoodstand',
  templateUrl: './editfoodstand.component.html',
  styleUrls: ['./editfoodstand.component.css']
})


export class EditfoodstandComponent implements OnInit {
  constructor(
    private _foodstandService: FoodstandService,
    private _router: Router) {
    this.foodstands = this._foodstandService.read_all();
  }
  @Input() foodstand!: Foodstand;
  @Input() foodstands!: Foodstand[];
  @Output() foodstandsChange = new EventEmitter<Foodstand[]>();

  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 55.6638295, lng: 12.5414299 };

  markers: MarkerProperties[] = [];

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
  
  saveChangesButtonClick() {
    this._router.navigate(['foodstandOverview'])
  }

  useMyAddress: boolean = false;

  UseMyAddress() {
    this.useMyAddress = !this.useMyAddress;
    console.log(this.useMyAddress);
  }
}

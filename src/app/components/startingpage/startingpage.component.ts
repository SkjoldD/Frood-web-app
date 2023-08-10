import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Foodstand } from 'src/app/classes/foodstands/foodstand';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';
import { FoodstandService } from 'src/app/services/http/foodstand/foodstand.service';
import { ModalServiceService } from 'src/app/services/pop-up/modal-service.service';
import { SelectedFoodstandService } from 'src/app/services/selected/foodstand/selected-foodstand.service';
import { GrowntypeHelperServiceService } from 'src/app/services/utilities/helper/growntype-helper-service.service';

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

  markerOptions: google.maps.MarkerOptions = {
    icon: { 
      url: "assets/icons/foodstandanimation.png",
      scaledSize:new google.maps.Size(70,70)
  },

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

  constructor(private _modalserviceservice: ModalServiceService,
    private _router: Router,
    private _foodstandService: FoodstandService) {
    this.foodstands = this._foodstandService.read_all();
  }

  foodstands!: Foodstand[];

  MarkerClick(){
    this._modalserviceservice.open("map-selection")
    console.log("skjld")
  }

  basketiconButtonClick() {
    this._router.navigate(['foodstandOverview'])
  }

  profileiconButtonClick() {
    this._router.navigate(['profile'])
  }

  foodstandiconButtonClick() {
    this._router.navigate(['buyfood'])
  }

}

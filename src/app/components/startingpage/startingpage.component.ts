import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Foodstand } from 'src/app/classes/foodstands/foodstand';
import { ProductFoodGrown } from 'src/app/classes/product-food-grown';
import { FoodstandService } from 'src/app/services/http/foodstand/foodstand.service';
import { ModalServiceService } from 'src/app/services/pop-up/modal-service.service';

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
    { position: { lat: 55.936732, lng: 12.268858 },}, // Eiffel Tower
  ];

  mapOptions: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 24,
    minZoom: 4,
    disableDefaultUI: true

  };

  foodstandMarkerOptions: google.maps.MarkerOptions = {
    icon: { 
      url: "assets/icons/foodstand-icon-updated.png",
      scaledSize:new google.maps.Size(70,110)
    }
  };

  myLocationMarkerOptions: google.maps.MarkerOptions = {
    icon: { 
      url: "assets/icons/coloured-pin-icon wodden.png",
      scaledSize:new google.maps.Size(60,70)
    }
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

  constructor(
    private _modalserviceservice: ModalServiceService,
    private _router: Router,
    private _foodstandService: FoodstandService) {
    this.foodstands = this._foodstandService.read_all();
  }

  foodstands!: Foodstand[];

  MarkerClick(foodstand: Foodstand){
    this._modalserviceservice.open(foodstand.name)
    console.log("skjld")
  }
  
  CenterChange(){
    console.log("center changed")
  }


  basketiconButtonClick() {
    this._router.navigate(['foodstandOverview'])
  }


}

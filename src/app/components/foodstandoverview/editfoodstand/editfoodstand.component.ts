import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Foodstand } from 'src/app/classes/foodstands/foodstand';
import { FoodstandService } from 'src/app/services/http/foodstand/foodstand.service';
import { ModalServiceService } from 'src/app/services/pop-up/modal-service.service';
import { SelectedFoodstandService } from 'src/app/services/selected/foodstand/selected-foodstand.service';

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

  temporaryFoodstand!: Foodstand;
  foodstand!: Foodstand;
  foodstands!: Foodstand[];
  foodstandsChange = new EventEmitter<Foodstand[]>();

  useMyAddress: boolean = false;

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

  constructor(
    private _foodstandService: FoodstandService,
    private _router: Router,
    private _modalserviceservice: ModalServiceService,
    private _selectedFoodstandService: SelectedFoodstandService) {
    this._selectedFoodstandService.selectedFoodstand.subscribe(val => {
      this.temporaryFoodstand = val.DeepClone(val);
      this.foodstand = val;
      this._modalserviceservice.add(this.foodstand.name);
      console.log(this.foodstand); console.log("test");
    });
    this.foodstands = this._foodstandService.read_all();
  }

  ngOnInit(): void {

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

  UseMyAddress() {
    this.useMyAddress = !this.useMyAddress;
    console.log(this.useMyAddress);
  }

  DeleteFoodstand() {
    this._modalserviceservice.open(this.foodstand.name)
    //const index = this.foodstands.indexOf(foodstand, 0);
    //if (index > -1) {
    //this.foodstands.splice(index, 1);
    // }  
  }

  saveChangesButtonClick() {
    this.foodstand = this.temporaryFoodstand;
    this._router.navigate(['foodstandOverview'])
  }
}

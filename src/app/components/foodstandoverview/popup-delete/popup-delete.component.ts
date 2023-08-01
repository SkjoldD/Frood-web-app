import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Foodstand } from 'src/app/classes/foodstands/foodstand';
import { ModalServiceService } from 'src/app/services/pop-up/modal-service.service';

@Component({
  selector: 'app-popup-delete',
  templateUrl: './popup-delete.component.html',
  styleUrls: ['./popup-delete.component.css']
})

export class PopupDeleteComponent {
  @Input() foodstand!: Foodstand;
  @Input() foodstands!: Foodstand[];
  @Output() foodstandsChange = new EventEmitter<Foodstand[]>();


  constructor(private _modalserviceservice: ModalServiceService) {
  }


  DeletefoodstandClick() {
    console.log(this.foodstand)
    console.log(this.foodstands)
    this._modalserviceservice.close(this.foodstand.name)
    const index = this.foodstands.indexOf(this.foodstand, 0);
    if (index > -1) {
      this.foodstands.splice(index, 1);
    }
    console.log("delete")
  }

  KeepfoodstandClick() {
    this._modalserviceservice.close(this.foodstand.name)
    console.log("keep")
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { SignupComponent } from './components/signup/signup.component';
import { StartingpageComponent } from './components/startingpage/startingpage.component';
import { ProfileHomeComponent } from './components/profile/profileHome/profile-home/profile-home.component';
import { SellfoodComponent } from './components/sellfood/sellfood.component';
import { ErrorComponentComponent } from './components/utilities/error-component/error-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuyfoodComponent } from './components/buyfood/buyfood.component';
import { FoodstandComponent } from './components/foodstand/foodstand.component';
import { GoogleMapsModule } from '@angular/google-maps'

import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FoodstandProductGrownItemComponent } from './components/foodstand/foodstand-product-grown-item/foodstand-product-grown-item.component';
import { HeaderComponent } from './components/shared/general/header/header.component';
import { FooterComponent } from './components/shared/general/footer/footer.component';
import { HeaderWithLogoComponent } from './components/shared/general/header-with-logo/header-with-logo.component';
import { FoodstandProductGrownItemSoldoutComponent } from './components/foodstand/foodstand-product-grown-item-soldout/foodstand-product-grown-item-soldout.component';
import { MatRadioModule } from '@angular/material/radio';
import { FoodstandoverviewComponent } from './components/foodstandoverview/foodstandoverview.component';
import { CreatefoodstandComponent } from './components/foodstandoverview/createfoodstand/createfoodstand.component';
import { HoursdayTransformerPipe } from './pipes/hoursday-transformer.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { FoodstandoverviewitemComponent } from './components/foodstandoverview/foodstandoverviewitem/foodstandoverviewitem.component';
import { PopupDeleteComponent } from './components/foodstandoverview/popup-delete/popup-delete.component';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { PopupfoodstandcontentComponent } from './components/startingpage/popupfoodstandcontent/popupfoodstandcontent.component';
import { EditfoodstandComponent } from './components/foodstandoverview/editfoodstand/editfoodstand.component';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};
@NgModule({
  declarations: [
    AppComponent,
    HoursdayTransformerPipe,
    HomepageComponent,
    ProfileHomeComponent,
    ErrorComponentComponent,
    LoginpageComponent,
    SignupComponent,
    StartingpageComponent,
    SellfoodComponent,
    BuyfoodComponent,
    FoodstandComponent,
    FoodstandProductGrownItemComponent,
    HeaderComponent,
    FooterComponent,
    HeaderWithLogoComponent,
    FoodstandProductGrownItemSoldoutComponent,
    FoodstandoverviewComponent,
    CreatefoodstandComponent,
    ModalComponent,
    FoodstandoverviewitemComponent,
    PopupDeleteComponent,
    PopupfoodstandcontentComponent,
    EditfoodstandComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgFor,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatRadioModule,
    MatCardModule,
    MatSliderModule,
    
    GoogleMapsModule
  ],
  providers: [HoursdayTransformerPipe, { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {appearance:'outline'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }


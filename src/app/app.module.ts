import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent} from './components/loginpage/loginpage.component';
import { SignupComponent } from './components/signup/signup.component';
import { StartingpageComponent } from './components/startingpage/startingpage.component';
import { ProfileHomeComponent } from './components/profile/profileHome/profile-home/profile-home.component';
import { SellfoodComponent } from './components/sellfood/sellfood.component';
import { ErrorComponentComponent } from './components/utilities/error-component/error-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GoogleMapsModule } from '@angular/google-maps'

import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfileHomeComponent,
    ErrorComponentComponent,
    LoginpageComponent,
    SignupComponent,
    StartingpageComponent,
    SellfoodComponent
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
   
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


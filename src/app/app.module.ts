import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { ProfileHomeComponent } from './components/profile/profileHome/profile-home/profile-home.component';
import { ErrorComponentComponent } from './components/utilities/error-component/error-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfileHomeComponent,
    ErrorComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

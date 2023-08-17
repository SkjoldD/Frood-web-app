import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorComponentComponent } from './components/utilities/error-component/error-component.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { SignupComponent } from './components/signup/signup.component';
import { StartingpageComponent } from './components/startingpage/startingpage.component';
import { SellfoodComponent } from './components/sellfood/sellfood.component';
import { BuyfoodComponent } from './components/buyfood/buyfood.component';
import { ProfileHomeComponent } from './components/profile/profileHome/profile-home/profile-home.component';
import { FoodstandComponent } from './components/foodstand/foodstand.component';
import { FoodstandoverviewComponent } from './components/foodstandoverview/foodstandoverview.component';
import { CreatefoodstandComponent } from './components/foodstandoverview/createfoodstand/createfoodstand.component';
import { EditfoodstandComponent } from './components/foodstandoverview/editfoodstand/editfoodstand.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileHomeComponent },
  { path: 'sellfood', component: SellfoodComponent },
  { path: 'startingpage', component: StartingpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'buyfood', component: BuyfoodComponent },
  { path: 'foodstand', component: FoodstandComponent },
  { path: 'foodstandOverview', component: FoodstandoverviewComponent },
  { path: 'createfoodstand', component: CreatefoodstandComponent },
  { path: 'editfoodstand', component: EditfoodstandComponent },
  { path: '**', component: ErrorComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

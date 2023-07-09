import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorComponentComponent } from './components/utilities/error-component/error-component.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'login', component: LoginpageComponent},
  { path: 'signup', component: SignupComponent},
  { path: '**', component: ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

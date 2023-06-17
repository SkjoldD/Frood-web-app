import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { ErrorComponentComponent } from './components/utilities/error-component/error-component.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: '**', component: ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

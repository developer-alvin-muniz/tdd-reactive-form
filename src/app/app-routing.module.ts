import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {OrderFormComponent} from "./order-form/order-form.component";

const routes: Routes = [
  {path: '',component: HomePageComponent},
  {path: 'order-form',component: OrderFormComponent},
  {path: '**',redirectTo: ''}


  // TODO define a route for the coffee form.
  // The path should be order-form it should point to the order form component
  // you have to create the order form component - consider using
  // ng generate component <insert component name> to do so

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

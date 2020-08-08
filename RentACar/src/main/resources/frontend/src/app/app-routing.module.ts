import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListCarsComponent} from './list-cars/list-cars.component';
import {HomeComponent} from './home/home.component';
import {ReservationComponent} from './reservation/reservation.component';
import {ListAgentsComponent} from './list-agents/list-agents.component';
import {ListLocationsComponent} from './list-locations/list-locations.component';
import {LoginComponent} from './login/login.component';
import {ListReservationComponent} from './list-reservation/list-reservation.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'list-cars', component: ListCarsComponent},
  {path: 'make-reservation', component: ReservationComponent},
  {path: 'list-agents', component: ListAgentsComponent},
  {path: 'list-locations', component: ListLocationsComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'list-reservations', component: ListReservationComponent},
  {path: 'list-customer', component: ListCustomerComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

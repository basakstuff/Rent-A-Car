import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListAgentsComponent } from './list-agents/list-agents.component';
import { ListLocationsComponent } from './list-locations/list-locations.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorService } from './service/http.interceptor.service';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { AdminComponent } from './admin/admin.component';
import { RentPropertyAdditionComponent } from './rent-property-addition/rent-property-addition.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCarsComponent,
    NavbarComponent,
    HomeComponent,
    ReservationComponent,
    ListAgentsComponent,
    ListLocationsComponent,
    LoginComponent,
    ListReservationComponent,
    ListCustomerComponent,
    AdminComponent,
    RentPropertyAdditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot()

  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../service/data.service';
import { Subscription } from 'rxjs';
import { Car } from 'src/assets/entity/car.model';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { WeekDay } from '@angular/common';
import * as moment from "moment";
import { Agency } from 'src/assets/entity/agency.model';
import { HttpClient } from '@angular/common/http';
import { Reservation } from 'src/assets/entity/reservation.model';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html'
})
export class ReservationComponent implements OnInit ,OnDestroy{

  subscription: Subscription;
  httpSubscription: Subscription;
  car:Car;
  totalPrice:number;
  agencyList:any[];
  isSaved=false;

  reservationForm = this.fb.group({
    day: [null, [Validators.required]],
    bookingDate: [null, [Validators.required]],
    returnDate: [null, [Validators.required]],
    car: [null],
    username: [null],
    bookingAgencyId: [null, [Validators.required]],
    returnAgencyId: [null, [Validators.required]]

  });

  constructor(private http:HttpClient,private dataService:DataService,private fb: FormBuilder,private toastr: ToastrService,private authenticationService:AuthenticationService) {

  }

  ngOnInit() {
    this.httpSubscription=this.dataService.agencyList.subscribe(data => this.agencyList=data);
    this.subscription=this.dataService.currentCar.subscribe(car => {this.car=car});
    this.reservationForm.patchValue({carId: this.car.id});
  }

  calculatePrice(){
    const firstDate = moment(this.reservationForm.get('bookingDate').value);
    const secondDate = moment(this.reservationForm.get('returnDate').value);
    const diffInDays = Math.abs(firstDate.diff(secondDate, 'days'));
    this.reservationForm.patchValue({
      day: diffInDays
    });
    this.totalPrice=diffInDays*this.car.rentProperty.rentPrice;
  }

  save(){
    const reservationObject=new Reservation();
    reservationObject.bookingAgencyId=this.reservationForm.get('bookingAgencyId').value;
    reservationObject.returnAgencyId=this.reservationForm.get('returnAgencyId').value;
    reservationObject.car=this.car;
    reservationObject.returnDate=this.reservationForm.get('returnDate').value;
    reservationObject.bookingDate=this.reservationForm.get('bookingDate').value;
    reservationObject.day=this.reservationForm.get('day').value;
    reservationObject.username=this.authenticationService.username;
    this.http.post('http://localhost:8080/reservation',reservationObject).subscribe();
    this.isSaved=true;
    this.toastr.success('', 'Reservation is successfull!');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.httpSubscription.unsubscribe();
    this.isSaved=false;
  }

}

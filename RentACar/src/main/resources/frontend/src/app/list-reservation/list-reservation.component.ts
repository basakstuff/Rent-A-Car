import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from 'src/assets/entity/reservation.model';
import { AuthenticationService } from '../service/authentication.service';
import {Agency} from "../../assets/entity/agency.model";
import {Customer} from "../../assets/entity/customer.model";

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html'
})
export class ListReservationComponent implements OnInit {

  reservationList:Reservation[];
  returnAgency:Agency;

  constructor(private http:HttpClient,private authenticationService:AuthenticationService) { }


  ngOnInit() {
   this.http.get<Reservation[]>('http://localhost:8080/reservation/'+this.authenticationService.username).subscribe(data=>{this.reservationList=data});
  }

  getAgency(id){
    this.http.get<Customer>('http://localhost:8080/agency/'+id).subscribe(data=>{this.returnAgency=data})
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Car } from 'src/assets/entity/car.model';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html'
})
export class ListCarsComponent implements OnInit {

  carList:Car[];

  isAdmin = false;

  constructor(private http:HttpClient,private dataService:DataService,private router:Router,private toastr: ToastrService,private authenticationService:AuthenticationService) { }

  ngOnInit() {
    if (this.authenticationService.getLoggedInUserName() === 'admin') {
      this.isAdmin = true;
    }
    this.http.get<Car[]>('http://localhost:8080/car').subscribe(data=>{this.carList=data});
   }

   setCarObjectAndNavigate(car){
      this.dataService.changeMessage(car);
      this.router.navigateByUrl('/make-reservation');
   }

   deleteCar(id){
     this.http.delete<any>('http://localhost:8080/car/'+id).subscribe();
     window.location.reload();
     this.toastr.success('', 'Delete operation performed successfully!');
   }

}

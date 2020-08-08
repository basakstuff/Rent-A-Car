import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Car } from 'src/assets/entity/car.model';
import { Agency } from 'src/assets/entity/agency.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private carRoot = new BehaviorSubject<Car>(new Car());
  currentCar = this.carRoot.asObservable();

  private agentRoot = new BehaviorSubject<Agency[]>([]);
  agencyList = this.agentRoot.asObservable();

  changeMessage(car: Car) {
    this.carRoot.next(car);
  }

  changeAgencyList(agencyList:Agency[]){
    this.agentRoot.next(agencyList);
  }
}

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Subscription} from "rxjs";
import {Reservation} from "../../assets/entity/reservation.model";
import {Car} from "../../assets/entity/car.model";
import {RentProperty} from "../../assets/entity/rentProperty.model";
import {Customer} from "../../assets/entity/customer.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  httpSubscription: Subscription;
  rentPropertyList: RentProperty[];
  carAdditionForm = this.fb.group({
    brand: [null, [Validators.required]],
    model: [null, [Validators.required]],
    modelYear: [null, [Validators.required]],
    color: [null, [Validators.required]],
    fuelType: [null, [Validators.required]],
    rentProperty: this.fb.group({
      availability: true,
      rentPrice: [null, [Validators.required]],
    })
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.http.get<RentProperty[]>('http://localhost:8080/rentProperty').subscribe(data=>{this.rentPropertyList=data});
  }

  save() {
    const carAdditionObject = new Car();
    carAdditionObject.brand = this.carAdditionForm.get('brand').value;
    carAdditionObject.model = this.carAdditionForm.get('model').value;
    carAdditionObject.modelYear = this.carAdditionForm.get('modelYear').value;
    carAdditionObject.color = this.carAdditionForm.get('color').value;
    carAdditionObject.fuelType = this.carAdditionForm.get('fuelType').value;
    carAdditionObject.rentProperty = this.carAdditionForm.get('rentProperty').value;
    this.httpSubscription = this.http.post('http://localhost:8080/car', carAdditionObject).subscribe();

    this.carAdditionForm.reset();
    this.toastr.success('', 'Car addition is successful!');
  }

  ngOnDestroy() {
  }

}

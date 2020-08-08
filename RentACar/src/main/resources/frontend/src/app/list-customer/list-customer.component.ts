import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/assets/entity/customer.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html'
})
export class ListCustomerComponent implements OnInit {

  customer:Customer;

 constructor(private http:HttpClient) { }


 ngOnInit() {
  let username = sessionStorage.getItem('authenticatedUser')
  this.http.get<Customer>('http://localhost:8080/customer/'+username).subscribe(data=>{this.customer=data});
 }

}

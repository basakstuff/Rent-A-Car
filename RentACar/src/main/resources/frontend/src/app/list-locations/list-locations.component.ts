import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-locations',
  templateUrl: './list-locations.component.html'
})
export class ListLocationsComponent implements OnInit {

  locationList:Location[];

  constructor(private http:HttpClient) { }


  ngOnInit() {

   this.http.get<Location[]>('http://localhost:8080/location').subscribe(data=>{this.locationList=data});
  }


}

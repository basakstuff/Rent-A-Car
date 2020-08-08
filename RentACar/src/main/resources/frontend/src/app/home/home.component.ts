import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Agency } from 'src/assets/entity/agency.model';

import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  httpSubscription: Subscription;

  constructor(private http:HttpClient,private dataService:DataService) { }

  ngOnInit() {

   this.httpSubscription= this.http.get<Agency[]>('http://localhost:8080/agency').subscribe(data=>{this.dataService.changeAgencyList(data)});
   }

}

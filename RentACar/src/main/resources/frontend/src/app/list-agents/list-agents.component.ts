import { Component, OnInit, OnDestroy } from '@angular/core';
import { Agency } from 'src/assets/entity/agency.model';
import { Subscription } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-list-agents',
  templateUrl: './list-agents.component.html'
})
export class ListAgentsComponent implements OnInit ,OnDestroy{

  httpSubscription: Subscription;
  agencyList:Agency[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.httpSubscription=this.dataService.agencyList.subscribe( data => this.agencyList=data)
   }

   ngOnDestroy(): void {
    this.httpSubscription.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import { from } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers;
  constructor( private store : Store<any>) { }

  ngOnInit() {
    debugger;
    this.store.dispatch({type : "LOAD_CUSTOMERS"});
    this.store.subscribe(state => (this.customers = state.customers.customers))
  }

}

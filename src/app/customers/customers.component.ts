import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../mocks/customer-mocks';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers : Customer[]=CUSTOMERS;
  constructor() { }

  ngOnInit(): void {
  }

}

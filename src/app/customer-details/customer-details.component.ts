import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CUSTOMERS } from '../mocks/customer-mocks';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer:Customer;
  message:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.setCustomer();
  }

  private setCustomer() : void {
    let param = this.route.snapshot.paramMap.get('id');
    const id : number = parseInt(param);

    if (isNaN(id)) {
      this.message = `Error: ${id} is not a valid number.`;
    } else {
      this.customer = CUSTOMERS.find(c => c.id == id);
    }
  }
}

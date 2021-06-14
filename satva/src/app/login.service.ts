import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  customer1 = {customerId:1001, password:'1@Abcdef'};
  customer2 = {customerId:1002, password:'2@Abcdef'};
  customer3 ={customerId:1003, password:'3@Abcdef'};
  customers= [this.customer1, this.customer2, this.customer3]
  constructor() { }
  getPassword(customerId: number): string {

    for (let customer of this.customers) {
      if (customer.customerId === customerId) {
        return customer.password
      }

    }
    return "Invalid customer id or password";
  }


}

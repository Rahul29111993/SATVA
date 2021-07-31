import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 user='';
 active=true

  constructor(private ar:ActivatedRoute,private us:UserService,private route:Router) { }
 customerData:Customer=new Customer()
  ngOnInit(): void {
    this.getCustomerId();
  }
  getCustomerId(){

var customerId:string|null=sessionStorage.getItem('custId');
if(customerId!=null){
this.us.getCustomer(parseInt(customerId)).subscribe(
  (data)=>{
  
Object.assign(this.customerData,data)

    this.user=this.customerData.firstname;
    
    
  }
)
}
  }

}

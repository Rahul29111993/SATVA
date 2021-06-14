import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 user="Nandini";
 customerId:number=0
  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomerId();
  }
  getCustomerId(){
this.ar.params.subscribe((params)=>this.customerId=params['id']);

  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../address';
import { Customer } from '../customer';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userType:string="";
 firstName:string="";
	lastName:string ="";
	  emailId:string ="";
 passWord:string="";   
     
    phoneNo:number=0;
    line1: string = "";
     line2: string = "";
    landmark: string = "";
     city: string = "";
     state: string = "";
     pinCode: number = 0;
     successMsg:string="";
    //  successMsg1:string="Click Here to continue..."
     errorMsg:string="";
     customer:Customer=new Customer();
     address:Address=new Address();
     

   constructor(private ar:ActivatedRoute,private rs:RegisterService,private router:Router) { }
 
   ngOnInit(): void {
     this.getUsertype();
   }
   getUsertype(){
     this.ar.params.subscribe(params=>{this.userType=params['usertype']});
   }
   onSubmit(formValue:NgForm){
    // console.log("form submitted");
    this.address.lineOne=this.line1;
    this.address.lineTwo=this.line2;
    this.address.landMark=this.landmark;
    this.address.pincode=this.pinCode;
    this.address.cityName=this.city;
    this.address.stateName=this.state;
    this.address.phonenumber=this.phoneNo;
    this.customer.address=this.address;
    this.customer.emailid=this.emailId;
    this.customer.firstname=this.firstName;
    this.customer.lastname=this.lastName;
    this.customer.password=this.passWord;
    // console.log(this.customer)
    // this.customer.phoneNo=this.phoneNo;
    this.rs.regCostumer(this.customer).subscribe(
      (data)=>{this.successMsg="Customer Id 1001 generated !!!"},
      (err)=>{this.errorMsg="Sorry !!! couldn't register now. please try again later."}
    )
  }
}

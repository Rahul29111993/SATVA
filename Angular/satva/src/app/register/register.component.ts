import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../address';
import { Consumer } from '../consumer';
import { Customer } from '../customer';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
userType:string="";
//  firstName:string="";
// 	lastName:string ="";
// 	  emailId:string ="";
//  passWord:string="";   
     
//     phoneNo:number=0;
//     line1: string = "";
//      line2: string = "";
//     landmark: string = "";
//      city: string = "";
//      state: string = "";
//      pinCode: number = 0;
     successMsg:string="";
    //  successMsg1:string="Click Here to continue..."
     errorMsg:string="";
     customer:Customer=new Customer();
     address:Address=new Address();
     consumer:Consumer=new Consumer();

   constructor(private ar:ActivatedRoute,private rs:RegisterService,private router:Router,private formBuilder:FormBuilder) { 
     this.registerForm=formBuilder.group({
     firstname:['',Validators.required],
     lastname:['',Validators.required], //new FormControl(),
     password:['',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
     phoneno:['',Validators.required],
     emailid:['',[Validators.required,,Validators.pattern(/^[\w._]+@[A-Za-z]+\.(com|co\.in|org)$/)]],
     cpassword:['',Validators.required],
     address1:['',Validators.required],
     address2:['',Validators.required],
     landmark:['',Validators.required],
     city:['',Validators.required],
     state:['',Validators.required],
     zip:['',Validators.required]
    });
   }
 
   ngOnInit(): void {
     this.getUsertype();
   }
   getUsertype(){
     this.ar.params.subscribe(params=>{this.userType=params['usertype']});
   }
   onSubmit(){
  
    this.address.lineOne=this.registerForm.value.address1;
    this.address.lineTwo=this.registerForm.value.address2;
    this.address.landMark=this.registerForm.value.landmark;
    this.address.pincode=this.registerForm.value.zip;
    this.address.cityName=this.registerForm.value.city;
    this.address.stateName=this.registerForm.value.state;
    this.address.phonenumber=this.registerForm.value.phoneno;
    if(this.userType=="customer"){
    this.customer.add=this.address;
    this.customer.emailid=this.registerForm.value.emailid;
    this.customer.firstname=this.registerForm.value.firstname;
    this.customer.lastname=this.registerForm.value.lastname;
    this.customer.password=this.registerForm.value.password;
    
    this.address.phonenumber=this.registerForm.value.phoneno;
    this.rs.regCostumer(this.customer).subscribe(
      (data)=>{
        if(data==-1){
          this.errorMsg="Sorry !!! couldn't register now. please try again later."
        }
        else{
        this.successMsg="Customer Id "+ data + " generated !!!"}},
      (err)=>{this.errorMsg="Sorry !!! couldn't register now. please try again later."}
    )
  }
  else if(this.userType=="consumer"){
    this.consumer.add=this.address;
    this.consumer.emailid=this.registerForm.value.emailid;
    this.consumer.firmname=this.registerForm.value.firstname;
    this.consumer.GSTiN=this.registerForm.value.lastname;
    this.consumer.passWord=this.registerForm.value.password;
   
    this.address.phonenumber=this.registerForm.value.phoneno;
    this.rs.regConsumer(this.consumer).subscribe(
      (data)=>{
        if(data==-1){
          this.errorMsg="Sorry !!! couldn't register now. please try again later."
        }
        else{
        this.successMsg="consumer Id "+ data + " generated !!!"}},
      (err)=>{this.errorMsg="Sorry !!! couldn't register now. please try again later."}
    )
  }
  
}
}

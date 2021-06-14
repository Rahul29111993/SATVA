import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IImage } from 'ng-simple-slideshow';
import { Customer } from '../customer';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  imageUrlArray: (string | IImage)[] = [{ url: 'assets/Satva-BuyPaper-1/Slide1.jpg', caption: 'The first slide', href: '#config' }]
 height="100%";
  userType=""; 
 customerId: number=0;
 customerPassword:string=""; 
 consumerId:number=0;
 consumerPassword:string="";
 loginError:string="";
  constructor(private ar:ActivatedRoute,private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.getUsertype();
  }
  getUsertype(){
    this.ar.params.subscribe(params=>{this.userType=params['usertype']});
  }
  onSubmit(formValue:NgForm){
    
    this.customerId=formValue.value.customerid;
    this.customerPassword=formValue.value.customerpassword;
    
    let password=this.loginService.getPassword(this.customerId)
    if(password===this.customerPassword){
      if(this.userType=='customer'){
        this.router.navigate(['/customer'])
      }
      else if(this.userType=='dropbox'){
        this.router.navigate(['/dropbox'])
      }}
      else{
        // console.log('else')
        this.loginError="invalid user id or password";
      }
    
    // }
    
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IImage } from 'ng-simple-slideshow';
import { Customer } from '../customer';
import { Login } from '../login';
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
  signIn:Login=new Login();
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
    
    this.signIn.custid=formValue.value.customerid;
    this.signIn.passWord=formValue.value.customerpassword;
    let status:any;
    if(this.userType=='customer' || this.userType=='dropbox')   {
    status=this.loginService.validateCustomerPassword(this.signIn)
  }
  else{
    status=this.loginService.validateConsumerPassword(this.signIn)
  }
    if(status){
      
      if(this.userType=='customer'){
        sessionStorage.setItem('custId',this.signIn.custid.toString())
        this.router.navigate(['/customer'])
      }
      else if(this.userType=='dropbox'){
        sessionStorage.setItem('custId',this.signIn.custid.toString())
        this.router.navigate(['/dropbox'])
      }
      else if(this.userType=='consumer'){
        sessionStorage.setItem('consumerId',this.signIn.custid.toString())
        this.router.navigate(['/consumer'])
      }
    }      
      else{
        // console.log('else')
        this.loginError="invalid user id or password";
      }
    
    // }
    
  }

}

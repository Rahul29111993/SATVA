import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../feedback.service';
import { Feedback } from './feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  color1:String='rgb(217,217,217)'
  color2:String='rgb(217,217,217)'
  color3:String='rgb(217,217,217)'
  color4:String='rgb(217,217,217)'
  successMsg=''
  errorMsg=''
 feedback:Feedback=new Feedback();
  userType=''
  constructor(private ar:ActivatedRoute,private fs:FeedbackService) { }

  ngOnInit(): void {
    this.ar.params.subscribe(param=>this.userType=param.usertype)
  }
 updateFeedbackValue(v1:any,v2:any,v3:any,v4:any,desc:any){
  this.successMsg=''
  this.errorMsg=''
  var customerId:string|null=sessionStorage.getItem('custId');
  var consumerId:string|null=sessionStorage.getItem('consumerId');
   if(this.userType=='customer' && customerId!=null){
     this.feedback.suggest=desc.value
     this.feedback.custConsumerid=parseInt(customerId)
    if(v1.style.color!='rgb(217,217,217)'){
      this.feedback.rate=1;
    }
    else if(v2.style.color!='rgb(217,217,217)'){
      this.feedback.rate=2;
    }
    else if(v3.style.color!='rgb(217,217,217)'){
      this.feedback.rate=3;
    }
    else if(v4.style.color!='rgb(217,217,217)'){
      this.feedback.rate=4;
    }
    else{
      this.feedback.rate=0
    }
    this.fs.updateCustConsumerFeedback(this.feedback).subscribe(
      (data)=>{
        if(data==0){
          this.successMsg='Feedback updated successfully'
        }
        else{
          this.errorMsg="Feedback not updated. Please try after sometime"
        }
      }
    )
  }
  if(this.userType=='consumer' && consumerId!=null){
    this.feedback.suggest=desc.value
    this.feedback.custConsumerid=parseInt(consumerId)
   if(v1.style.color!='rgb(217,217,217)'){
     this.feedback.rate=1;
   }
   else if(v2.style.color!='rgb(217,217,217)'){
     this.feedback.rate=2;
   }
   else if(v3.style.color!='rgb(217,217,217)'){
     this.feedback.rate=3;
   }
   else if(v4.style.color!='rgb(217,217,217)'){
     this.feedback.rate=4;
   }
   else{
     this.feedback.rate=0
   }
   this.fs.updateCustConsumerFeedback(this.feedback).subscribe(
     (data)=>{
       if(data==0){
         this.successMsg='Feedback updated successfully'
       }
       else{
         this.errorMsg="Feedback not updated. Please try after sometime"
       }
     }
   )
 }
 }
}

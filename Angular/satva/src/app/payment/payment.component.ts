import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Buytransaction } from '../buytransaction';
import { Consumer } from '../consumer';
import { ConsumerpaperService } from '../consumerpaper.service';
import { ConsumertransactionService } from '../consumertransaction.service';
import { Onlinepayment } from '../onlinepayment';
import { UpiserviceService } from './upiservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 totalCartValue:number=0
 upiStatus=false;
 onlinePayment:Onlinepayment=new Onlinepayment()
 transaction:Buytransaction=new Buytransaction()
  constructor(private router:Router,private cps:ConsumerpaperService,private upiService:UpiserviceService,private cts:ConsumertransactionService) { }

  ngOnInit(): void {
this.totalCartValue=this.cps.TotalPayableAmount

this.onlinePayment.paymentmode="UPI"
this.onlinePayment.amountValue=this.totalCartValue
this.transaction.onlinepayment=this.onlinePayment
var consumerId:string|null=sessionStorage.getItem("consumerId")
if(consumerId!=null){
 this.transaction.consumerid=parseInt(consumerId)
 this.transaction.paperlist=this.cps.orderedPapers
}
  }
  checkUpi(upiValue:any,verifyButton:any){
      if(this.upiService.verifyUpi(upiValue)){
        this.upiStatus=false
         verifyButton.innerText="Verified"
        
      }
      else{
        this.upiStatus=true
        verifyButton.innerText="Verify"
      }
  }
  updateTransaction(){
    this.cts.storeTransaction(this.transaction).subscribe(data=>{
      if(data){
        this.router.navigate(['/consumer', {outlets: {'sidenavcontent': ['ordercomplete']}}])
      }
    })
  }
}

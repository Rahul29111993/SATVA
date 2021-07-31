import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Selltransaction } from '../selltransaction';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {
  sellTransactionData:Selltransaction[]=[]
  totalReward=0
  constructor(private dashboard:DashboardService) { }

  ngOnInit(): void {
   
    this.getTransactionDetails();
  }
  getTransactionDetails(){
  
    var customerId:string|null=sessionStorage.getItem('custId');   
    
    if(customerId!=null){    
    this.dashboard.getTransactionDetails(parseInt(customerId)).subscribe(
      (data)=>{
       
       for(let tr of data){
          let sellTransaction=new Selltransaction()
          Object.assign(sellTransaction,tr)
          this.sellTransactionData.push(sellTransaction)
        
          this.totalReward+=sellTransaction.rewardpoints
       }
      },
       
     
      (err)=>{console.log("error")}
    )
    }}
}

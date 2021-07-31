import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import {HttpClient} from '@angular/common/http';
import { StoreIpService } from './store-ip.service';
import { Selltransaction } from './selltransaction';
@Injectable({
  providedIn: 'root'
})
export class UpdatetransactionService {
rewardPoints:number=0
  constructor(private http:HttpClient,private ipService:StoreIpService) { }
  updateTransaction(transaction:Selltransaction){
    return this.http.post("http://"+this.ipService.ipAddress+":"+this.ipService.port+"/storeSellTransactionDetails",transaction)
  }
  customerReward(rewardPoints:number){
    this.rewardPoints=rewardPoints;
  }
  getRewardPoints(){
    return this.rewardPoints
  }
}

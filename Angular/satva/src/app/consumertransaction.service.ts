import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buytransaction } from './buytransaction';
import { Consumer } from './consumer';
import { Customer } from './customer';
import { StoreIpService } from './store-ip.service';

@Injectable({
  providedIn: 'root'
})
export class ConsumertransactionService {

  constructor(private http:HttpClient,private ipService:StoreIpService) { }
url="http://"+this.ipService.ipAddress+":"+this.ipService.port+"/storeBuyTransactionDetails"
url1="http://"+this.ipService.ipAddress+":"+this.ipService.port+"/getBuyTransactionDetails"

  storeTransaction(transaction:Buytransaction){
   
    return this.http.post(this.url,transaction)
  }
  
  getTransaction(consumerId:number):Observable<Buytransaction[]>{
    return this.http.post<Buytransaction[]>("http://"+this.ipService.ipAddress+":"+this.ipService.port+"/getBuyTransactionDetails",consumerId)
  }
}

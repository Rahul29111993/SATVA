import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buytransaction } from './buytransaction';
import { Selltransaction } from './selltransaction';
import { StoreIpService } from './store-ip.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http:HttpClient,private ipService:StoreIpService) { }
  getTransactionDetails(customerId:number):Observable<Selltransaction[]>{
    return this.http.post<Selltransaction[]>("http://"+this.ipService.ipAddress+":"+this.ipService.port+"/getSellTransactionDetails",customerId)
  }
  getBuyTransactions(consumerId:number):Observable<Buytransaction[]>{
    return this.http.post<Buytransaction[]>("http://"+this.ipService.ipAddress+":"+this.ipService.port+"/getBuyTransactionDetails",consumerId)
  }
}

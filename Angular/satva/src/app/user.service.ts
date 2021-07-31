import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { StoreIpService } from './store-ip.service';
import { Observable } from 'rxjs';
import { Consumer } from './consumer';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 customerName:string=''
  constructor(private http:HttpClient,private ipService:StoreIpService) { }
  url="http://"+this.ipService.ipAddress+":"+this.ipService.port+"/getConsumer "
  url1="http://"+this.ipService.ipAddress+":"+this.ipService.port+"/getCustomer"
  
    getCustomer(customerId:number):Observable<Customer>{
      
      return this.http.post<Customer>(this.url1,customerId)
    }
    getConsumer(consumerId:number):Observable<Consumer>{
     
      return this.http.post<Consumer>(this.url,consumerId)
    }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Customer } from './customer';
import { StoreIpService } from './store-ip.service';
import { Consumer } from './consumer';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient,private ipService:StoreIpService) { }
url="http://"+this.ipService.ipAddress+":"+this.ipService.port+"/storeCustomerRegDetails"
url1="http://"+this.ipService.ipAddress+":"+this.ipService.port+"/storeConsumerRegDetails"

  regCostumer(customer:Customer){
    
    return this.http.post(this.url,customer)
  }
  regConsumer(consumer:Consumer){
  
    return this.http.post(this.url1,consumer)
  }
}

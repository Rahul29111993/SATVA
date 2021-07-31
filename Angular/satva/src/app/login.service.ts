import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';
import { StoreIpService } from './store-ip.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  
  constructor(private http:HttpClient,private ipService:StoreIpService) { }
url="http://"+this.ipService.ipAddress+":"+this.ipService.port+"/validateCustomer"
url1="http://"+this.ipService.ipAddress+":"+this.ipService.port+"/validateConsumer"

  validateCustomerPassword(signIn:Login){  
    return this.http.post(this.url,signIn)
  }
  validateConsumerPassword(signIn:Login){  
    return this.http.post(this.url1,signIn)
  }

}

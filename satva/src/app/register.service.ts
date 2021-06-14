import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Customer } from './customer';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  regCostumer(customer:Customer){
    return this.http.post("http://159.122.179.246:30163/storeCustomerRegDetails",customer, {responseType: 'text'})
  }

}

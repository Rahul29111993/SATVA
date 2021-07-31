import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpiserviceService {
upiArray:any=["8887756900@upi","9867756901@upi","7876756920@upi"]
  constructor() { }
  verifyUpi(upi:string){
    for(let upiValue of this.upiArray){
      if(upiValue==upi){
        return true
      }
    }
    return false;
  }
}

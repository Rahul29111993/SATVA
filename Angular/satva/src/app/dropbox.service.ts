import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Paper } from './paper';

import { Observable } from 'rxjs';
import { StoreIpService } from './store-ip.service';
import { PaperDetails } from './paper-details';
@Injectable({
  providedIn: 'root'
})
export class DropboxService {


username:string=''
userPaperDetails:Paper[]=[]

constructor(private http:HttpClient,private ipService:StoreIpService) { }
url="http://"+this.ipService.ipAddress+":"+this.ipService.port+"/fetchPaperDetails"

 getDropBoxPaperDetails(paperDetails:PaperDetails):Observable<Paper[]>{
  return this.http.post<Paper[]>(this.url,paperDetails)

 }
updateUserPaperDetails(papers:Paper[]){
    this.userPaperDetails=papers;
}
 getUserPaperDetails(){
     return this.userPaperDetails;
 }
 
 
}


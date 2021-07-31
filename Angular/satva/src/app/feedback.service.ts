import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from './feedback/feedback';
import { StoreIpService } from './store-ip.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private http:HttpClient,private ipService:StoreIpService) { }
  url="http://"+this.ipService.ipAddress+":"+this.ipService.port+"/storeFeedback"
  updateCustConsumerFeedback(feedback:Feedback){

    return this.http.post(this.url,feedback)
  }
}

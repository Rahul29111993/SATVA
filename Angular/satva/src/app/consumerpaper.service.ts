import { Injectable } from '@angular/core';
import { Paper } from './paper';
import { Papermaster } from './papermaster';

@Injectable({
  providedIn: 'root'
})
export class ConsumerpaperService {
  consumerPaperDetails:Paper[]=[]
  orderedPapers:Paper[]=[]
  TotalPayableAmount:number=0
  paperMasterDetails:Papermaster[]=[]
  constructor() { }
  updateConsumerPaperDetails(papers:Paper[]){
    this.consumerPaperDetails=papers;
     }

     getConsumerPaperDetails(){
      return  this.consumerPaperDetails;
         }

         updateOrderedPapers(paperArray:Paper[]){
           this.orderedPapers=paperArray
         }

         updateTotalPayPrice(price:number){
           this.TotalPayableAmount=price
         }
  //update papermaster details
  updatePaperMasterDetails(paperMasterDetails:Papermaster[]){
    this.paperMasterDetails=paperMasterDetails
  }
}

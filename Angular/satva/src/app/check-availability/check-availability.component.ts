import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CheckavailabilityService } from '../checkavailability.service';
import { ConsumerpaperService } from '../consumerpaper.service';

import { Paper } from '../paper';
import { Papermaster } from '../papermaster';

@Component({
  selector: 'app-check-availability',
  templateUrl: './check-availability.component.html',
  styleUrls: ['./check-availability.component.css']
})
export class CheckAvailabilityComponent implements OnInit {
  checkBoxCount=0;
  papers:Paper[]=[];
  orderedPapers:Paper[]=[];
  buyPaper:any=[];
  paperMasterDetails:Papermaster[]=[]
  constructor(private router:Router,private cps:ConsumerpaperService,private cas:CheckavailabilityService) { }
  availabilityDetails:number[]=[]
  ngOnInit(): void {
    this.getPaperDetails()
  }
getPaperDetails(){
  this.cas.getPaperMasterDetails().subscribe(data=>{
    
    for(let papermaster of data){
      let paperMaster=new Papermaster()
      this.paperMasterDetails.push(Object.assign(paperMaster,papermaster))
    }
    this.cps.updatePaperMasterDetails(this.paperMasterDetails)
    this.papers=this.cps.getConsumerPaperDetails()
    for(let paper of this.papers){
      for(let paper1 of this.paperMasterDetails){
        if(paper.paperType.toLowerCase()==paper1.Type.toLowerCase() && paper.paperQuality.toLowerCase()==paper1.qual.toLowerCase()){
          this.availabilityDetails.push(paper1.qOH)}
      }}
    
  })
  
 
}
convertString(value:string){
  return parseInt(value)
}
onNgModelChange(event:any,value:string){  
  
  if(event){
    this.buyPaper.push(value)
  }
  else{
    if(this.buyPaper.indexOf(value)!=-1){
      this.buyPaper.splice(this.buyPaper.indexOf(value),1)
    }
  }
}
updateOrderSummary(){
  for(let vl of this.buyPaper){
    this.orderedPapers.push(this.papers[parseInt(vl)])
  }
  this.cps.updateOrderedPapers(this.orderedPapers)
  this.router.navigate(['/consumer', {outlets: {'sidenavcontent': ['ordersummary']}}])
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumerpaperService } from '../consumerpaper.service';
import { Paper } from '../paper';
import { Papermaster } from '../papermaster';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {
  priceValue:number[]=[]
  totalPrice:number[]=[]
  orderedPapers:Paper[]=[]
  toalCartValue:number=0
  paperMasterDetails:Papermaster[]=[]
  constructor(private cps:ConsumerpaperService,private router:Router) { }

  ngOnInit(): void {
    this.getOrderPaperDetails()
  }
getOrderPaperDetails(){
  this.orderedPapers=this.cps.orderedPapers
  this.paperMasterDetails=this.cps.paperMasterDetails
  console.log("papermaster")
  console.log(this.paperMasterDetails)
for(let pr of this.orderedPapers){
  for(let pm of this.paperMasterDetails){
    if(pr.paperQuality.toLowerCase()==pm.qual.toLowerCase()&& pr.paperType==pm.Type){
      console.log('if')
      console.log(pm.priceperUnit)
      this.priceValue.push(pm.priceperUnit)
      this.totalPrice.push(pm.priceperUnit*pr.paperQuantity)
  }
  // if(pr.paperQuality.toLowerCase()=='low'){
  //   this.priceValue.push(3)
  //   this.totalPrice.push(3*pr.paperQuantity)
  // }
  // else if(pr.paperQuality.toLowerCase()=='high'){
  //   this.priceValue.push(15)
  //   this.totalPrice.push(15*pr.paperQuantity)
  // }
  // else{
  //   this.priceValue.push(8)
  //   this.totalPrice.push(8*pr.paperQuantity)
  // }
}}
for(let price of this.totalPrice){
  this.toalCartValue+=price
}
}
updateTotalAmount(){
  this.cps.updateTotalPayPrice(this.toalCartValue)
  this.router.navigate(['/consumer', {outlets: {'sidenavcontent': ['payment']}}])
}
}

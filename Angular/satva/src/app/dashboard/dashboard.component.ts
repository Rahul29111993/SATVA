import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pattern from 'patternomaly';
import { Buytransaction } from '../buytransaction';
import { ConsumertransactionService } from '../consumertransaction.service';
import { DashboardService } from '../dashboard.service';
import { LoginService } from '../login.service';
import { Onlinepayment } from '../onlinepayment';
import { Paper } from '../paper';
import { Selltransaction } from '../selltransaction';
import { Transaction } from '../transaction';
// import {draw, generate,} from 'patternomaly';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 sellTransactionData:Selltransaction[]=[]
 buyTransactionData:Buytransaction[]=[] 
 soldPaperDetails:Paper[]=[]
 paperTypes:string[]=[]  
 weight:number[]=[]
 buyPaperTypes:string[]=[]
 buyWeight:number[]=[]
totalAmount:number[]=[]
 totalReward=0  
 graphData={July:[0,0],August:[0,0],September:[0,0],October:[0,0],November:[0,0],December:[0,0]}
 buyGraphData={July:0,August:0,September:0,October:0,November:0,December:0}
userType=''
  constructor(private ar:ActivatedRoute,private dashboard:DashboardService,private router:Router,private cts:ConsumertransactionService) { }
  public barChartData: ChartDataSets[]=[]
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public barChartLabels: Label[] = ['July', 'August', 'September', 'October', 'November', 'December'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  
    public barChartData1: ChartDataSets[] = []
  ngOnInit(): void {
    this.ar.params.subscribe(param=>this.userType=param.usertype)
    this.getTransactionDetails();
  }
   getTransactionDetails(){
  
    var customerId:string|null=sessionStorage.getItem('custId');
    var consumerId:string|null=sessionStorage.getItem('consumerId');
    
    if(customerId!=null && this.userType=='customer'){    
    this.dashboard.getTransactionDetails(parseInt(customerId)).subscribe(
      (data)=>{
        //for loop get each transaction object and reward points
       for(let tr of data){
          let sellTransaction=new Selltransaction()
          Object.assign(sellTransaction,tr)
          this.sellTransactionData.push(sellTransaction)
          // this.rewards.push(sellTransaction.rewardpoints)
          this.totalReward+=sellTransaction.rewardpoints
       }
       //for loop to get paper details
        for(let sellTransaction of this.sellTransactionData){
          let paperType:string='';
          let paperWeight:number=0;
         for(let paper of sellTransaction.paperlist){
           let paper1=new Paper('','',0)
           Object.assign(paper1,paper)
           if(sellTransaction.paperlist.indexOf(paper)!=(sellTransaction.paperlist.length-1)){
             paperType+=paper1.paperType+', '
           }
           else{
             paperType+=paper1.paperType
           }
           paperWeight+=paper1.paperQuantity
         }
         this.paperTypes.push(paperType)
         this.weight.push(paperWeight)
        }
            this.updateSellGraphData()
             
         },
       
     
      (err)=>{console.log("error")}
    )
    }
    else if(consumerId!=null && this.userType=='consumer'){    
      this.cts.getTransaction(parseInt(consumerId)).subscribe(
        (data)=>{
          for(let tr of data){
            let buyTransaction=new Buytransaction()
            Object.assign(buyTransaction,tr)
            this.buyTransactionData.push(buyTransaction)
            
         }
         //for loop to get paper details
          for(let buyTransaction of this.buyTransactionData){
            let paperType:string='';
            let paperWeight:number=0;
           for(let paper of buyTransaction.paperlist){
             let paper1=new Paper('','',0)
             Object.assign(paper1,paper)
             if(buyTransaction.paperlist.indexOf(paper)!=(buyTransaction.paperlist.length-1)){
               paperType+=paper1.paperType+', '
             }
             else{
               paperType+=paper1.paperType
             }
             paperWeight+=paper1.paperQuantity
           }
           this.buyPaperTypes.push(paperType)
           this.buyWeight.push(paperWeight)
          }
          for(let buyTransaction of this.buyTransactionData){
            
            let onlinePayment=new Onlinepayment()
            Object.assign(onlinePayment,buyTransaction.onlinepayment)
            this.totalAmount.push(onlinePayment.amountValue)
          }
              this.updateBuyGraphData()
               
           },
        (err)=>{console.log("error")}
      )
      }
   }
   updateSellGraphData(){
    for(let tr of this.sellTransactionData){
      let value:Date|null=null
      let month:number=0
      if(tr.dateofTransaction!=null){
         value=new Date(tr.dateofTransaction)
         month=value.getMonth()
        }
       
      switch(month){        
        case 6: 
        let weight1=0  
        let reward1=tr.rewardpoints             
          for(let paper of tr.paperlist){
            let pr1=new Paper('','',0)
            Object.assign(pr1,paper)
            weight1+=pr1.paperQuantity
           
          }
          this.graphData.July[1]+=reward1
          this.graphData.July[0]+=weight1
          
        break;
        case 7:
          let weight2=0
          let reward2=tr.rewardpoints             
          for(let paper of tr.paperlist){
            let pr1=new Paper('','',0)
            Object.assign(pr1,paper)
            weight2+=pr1.paperQuantity
            
          }
          this.graphData.August[0]+=weight2
          this.graphData.August[1]+=reward2
        break;
        case 8:
          let weight3=0
          let reward3=tr.rewardpoints             
          for(let paper of tr.paperlist){
            let pr1=new Paper('','',0)
            Object.assign(pr1,paper)
            weight3+=pr1.paperQuantity
            
          }
          this.graphData.September[0]+=weight3
          this.graphData.September[1]+=reward3
        break;
        case 9:
          let weight4=0
          let reward4=tr.rewardpoints             
          for(let paper of tr.paperlist){
            let pr1=new Paper('','',0)
            Object.assign(pr1,paper)
            weight4+=pr1.paperQuantity
           
          }
          this.graphData.October[0]+=weight4
          this.graphData.October[1]+=reward4
        break;
        case 10:
          let weight5=0
          let reward5=tr.rewardpoints             
          for(let paper of tr.paperlist){
            let pr1=new Paper('','',0)
            Object.assign(pr1,paper)
            weight5+=pr1.paperQuantity
          
          }
          this.graphData.November[0]+=weight5
          this.graphData.November[1]+=reward5
        break;
        case 11:
          let weight6=0
          let reward6=tr.rewardpoints             
          for(let paper of tr.paperlist){
            let pr1=new Paper('','',0)
            Object.assign(pr1,paper)
            weight6+=pr1.paperQuantity
           
          }
          this.graphData.December[0]+=weight6
          this.graphData.December[1]+=weight6
        break;
      }
      this.barChartData= [
              { barThickness: 40, data:[this.graphData.July[0],this.graphData.August[0],this.graphData.September[0],this.graphData.October[0],this.graphData.November[0],this.graphData.December[0]], label: 'Amount of paper',hoverBackgroundColor:'rgb(169,206,144)', backgroundColor: [
                pattern.draw('line', 'rgb(113,173,71)'),pattern.draw('line', 'rgb(113,173,71)'),pattern.draw('line', 'rgb(113,173,71)'),pattern.draw('line', 'rgb(113,173,71)'),pattern.draw('line', 'rgb(113,173,71)'),pattern.draw('line', 'rgb(113,173,71)'),pattern.draw('line', 'rgb(113,173,71)')]},
              { barThickness: 40, data:[this.graphData.July[1],this.graphData.August[1],this.graphData.September[1],this.graphData.October[1],this.graphData.November[1],this.graphData.December[1]], label: 'Rewards Recieved', backgroundColor: [
                pattern.draw('line', 'rgb(91,153,214)'),pattern.draw('line', 'rgb(91,153,214)'),pattern.draw('line', 'rgb(91,153,214)'),pattern.draw('line', 'rgb(91,153,214)'),pattern.draw('line', 'rgb(91,153,214)'),pattern.draw('line', 'rgb(91,153,214)'),pattern.draw('line', 'rgb(91,153,214)')]}
            ];
    }
   }
   updateBuyGraphData(){
    for(let tr of this.buyTransactionData){
      let value:Date|null=null
      let month:number=0
      if(tr.dateofTransaction!=null){
         value=new Date(tr.dateofTransaction)
         month=value.getMonth()
        }
       
      switch(month){        
        case 6: 
        let weight1=0  
                   
          for(let paper of tr.paperlist){
            let pr1=new Paper('','',0)
            Object.assign(pr1,paper)
            weight1+=pr1.paperQuantity
            
          }          
          this.buyGraphData.July+=weight1
          
        break;
        case 7:
          let weight2=0                     
          for(let paper of tr.paperlist){
            let pr1=new Paper('','',0)
            Object.assign(pr1,paper)
            weight2+=pr1.paperQuantity
            
          }
          this.buyGraphData.August+=weight2
          
        break;
        case 8:
          let weight3=0
                     
          for(let paper of tr.paperlist){
            let pr1=new Paper('','',0)
            Object.assign(pr1,paper)
            weight3+=pr1.paperQuantity
            
          }
          this.buyGraphData.September+=weight3
          
        break;
        case 9:
          let weight4=0
               
          for(let paper of tr.paperlist){
            let pr1=new Paper('','',0)
            Object.assign(pr1,paper)
            weight4+=pr1.paperQuantity
           
          }
          this.buyGraphData.October+=weight4
         
        break;
        case 10:
          let weight5=0
                     
          for(let paper of tr.paperlist){
            let pr1=new Paper('','',0)
            Object.assign(pr1,paper)
            weight5+=pr1.paperQuantity
          
          }
          this.buyGraphData.November+=weight5
          
        break;
        case 11:
          let weight6=0
                  
          for(let paper of tr.paperlist){
            let pr1=new Paper('','',0)
            Object.assign(pr1,paper)
            weight6+=pr1.paperQuantity
           
          }
          this.buyGraphData.December+=weight6
          
        break;
      }
      this.barChartData1= [
        { barThickness: 40, data:[this.buyGraphData.July,this.buyGraphData.August,this.buyGraphData.September,this.buyGraphData.October,this.buyGraphData.November,this.buyGraphData.December], label: 'Amount of paper', stack: 'a',hoverBackgroundColor:'rgb(91,153,214)',backgroundColor: [
          pattern.draw('line', 'rgb(91,153,214)'),pattern.draw('line', 'rgb(91,153,214)'),pattern.draw('line', 'rgb(91,153,214)'),pattern.draw('line', 'rgb(91,153,214)'),pattern.draw('line', 'rgb(91,153,214)'),pattern.draw('line', 'rgb(91,153,214)'),pattern.draw('line', 'rgb(91,153,214)')]},
        
      ];
  
    }
   }
}


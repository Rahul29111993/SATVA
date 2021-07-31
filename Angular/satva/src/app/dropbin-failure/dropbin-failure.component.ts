import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DropboxService } from '../dropbox.service';
import { Paper } from '../paper';
import { PaperDetails } from '../paper-details';
import { Selltransaction } from '../selltransaction';

import { UpdatetransactionService } from '../updatetransaction.service';


@Component({
  selector: 'app-dropbin-failure',
  templateUrl: './dropbin-failure.component.html',
  styleUrls: ['./dropbin-failure.component.css']
})
export class DropbinFailureComponent implements OnInit {
papers:Paper[]=[]

dropboxPaperDetails:any=[]
successMsg=''
errorMsg=''
transactions:Selltransaction =new Selltransaction ();
paperData:PaperDetails=new PaperDetails();

  constructor(private router:Router,private ar:ActivatedRoute,private ds:DropboxService,private transaction:UpdatetransactionService) { }

  ngOnInit(): void {
    this.getPaperDetails();
  }

  getPaperDetails(){
    this.papers=this.ds.getUserPaperDetails()
 
    
    this.paperData.paperDetails=this.papers;
   this.ds.getDropBoxPaperDetails(this.paperData).subscribe(
      data=> this.dropboxPaperDetails=data
    );   
        
  }
  updatePaperData(){
    //customerId retrieve logic
    var customerId:string|null=sessionStorage.getItem('custId');
    
    if(customerId!=null){
      this.transactions.customerid=parseInt(customerId);
  
  }
    
      this.transactions.paperlist=<Paper[]>this.dropboxPaperDetails;
     
      
      this.transactions.rewardpoints=this.calculateRewardPoints(<Paper[]>this.dropboxPaperDetails);
      this.transaction.customerReward(this.transactions.rewardpoints)
      this.transaction.updateTransaction(this.transactions).subscribe(
        (data)=>{
         
          if(data){            
              this.router.navigate(['/dropbinsuccess'])}
            },
            (err)=>{this.errorMsg="Sorry !!! Unable to retrieve dropbox data"}
      )  
  }
  calculateRewardPoints(paperDetail:Paper[]){
    let rewards=0
    for(let paper of paperDetail){
        rewards+=paper.quantity
    }
     
      return rewards;
  }
}

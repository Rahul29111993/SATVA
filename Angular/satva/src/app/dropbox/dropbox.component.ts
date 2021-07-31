import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { DropboxService } from '../dropbox.service';
import { Paper } from '../paper';
import { PaperDetails } from '../paper-details';
import { Selltransaction } from '../selltransaction';
import { Transaction } from '../transaction';
import { UpdatetransactionService } from '../updatetransaction.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dropbox',
  templateUrl: './dropbox.component.html',
  styleUrls: ['./dropbox.component.css']
})
export class DropboxComponent implements OnInit {
  userName='';
  customer:Customer=new Customer();
  customerId:number=0
  paperDetails:string="";
 showtable=false;
 errorMsg=''
 transactions:Selltransaction=new Selltransaction ();
  constructor(private router:Router,private dropboxService:DropboxService,private uts:UpdatetransactionService,private us:UserService) { }
papers:Paper[]=[]
  ngOnInit(): void {
    var customerId:string|null=sessionStorage.getItem('custId');
    if(customerId!=null){
      this.customerId=parseInt(customerId)
     
    }
    this.us.getCustomer(this.customerId).subscribe(
      (data)=>{
        Object.assign(this.customer,data)
        this.userName=this.customer.firstname
        this.dropboxService.username=this.userName
      }
    )
  }
  onSubmit(dropBoxForm: NgForm){
    let paper:Paper=new Paper(dropBoxForm.value.papertype,dropBoxForm.value.paperquality,dropBoxForm.value.paperquantity)
    this.showtable=true;
    this.papers.push(paper);
    // this.paperDetails=JSON.stringify(this.papers)   
    this.dropboxService.updateUserPaperDetails(this.papers) 
  }

  isSingleClick: Boolean = true;     

singleClick(){
   this.isSingleClick = true;
        setTimeout(()=>{
            if(this.isSingleClick){
              this.navigateSuccess();
            }
         },250)
}
doubleClick(){
         this.isSingleClick = false;
         this.navigateFailure();
}
  navigateSuccess(){
    let rewards=0
    this.transactions.customerid=this.customerId;
    for(let paper of this.dropboxService.getUserPaperDetails()){
      rewards+=paper.paperQuantity
    }
    this.transactions.rewardpoints=rewards;
    this.transactions.paperlist=this.dropboxService.getUserPaperDetails()
    this.uts.rewardPoints=rewards;
    this.uts.updateTransaction(this.transactions).subscribe(
      (data)=>{
      
        if(data){            
            this.router.navigate(['/dropbin','true'])}
          },
          (err)=>{this.errorMsg="Sorry !!! Unable to retrieve dropbox data"}
    )  
    
  }
  navigateFailure(){
    
    this.router.navigate(['/dropbin','false'])
  }
}

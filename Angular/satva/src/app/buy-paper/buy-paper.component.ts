import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsumerpaperService } from '../consumerpaper.service';
import { DropboxService } from '../dropbox.service';
import { Paper } from '../paper';

@Component({
  selector: 'app-buy-paper',
  templateUrl: './buy-paper.component.html',
  styleUrls: ['./buy-paper.component.css']
})
export class BuyPaperComponent implements OnInit {
  paperDetails:string="";
  showtable=false;
   constructor(private cps:ConsumerpaperService) { }
 papers:Paper[]=[]
   ngOnInit(): void {
   }
   onSubmit(dropBoxForm: NgForm){
     let paper:Paper=new Paper(dropBoxForm.value.papertype,dropBoxForm.value.paperquality,dropBoxForm.value.paperquantity)
     this.showtable=true;
     this.papers.push(paper);
     this.cps.updateConsumerPaperDetails(this.papers)
   }
}

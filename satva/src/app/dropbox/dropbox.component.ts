import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Paper } from '../paper';
import { PaperDetails } from '../paper-details';

@Component({
  selector: 'app-dropbox',
  templateUrl: './dropbox.component.html',
  styleUrls: ['./dropbox.component.css']
})
export class DropboxComponent implements OnInit {
  paperDetails:string="";
 showtable=false;
  constructor() { }
papers:Paper[]=[]
  ngOnInit(): void {
  }
  onSubmit(dropBoxForm: NgForm){
    let paper:Paper=new Paper(dropBoxForm.value.papertype,dropBoxForm.value.paperquality,dropBoxForm.value.paperquantity)
    this.showtable=true;
    this.papers.push(paper);
    this.paperDetails=JSON.stringify(this.papers)
  }
}

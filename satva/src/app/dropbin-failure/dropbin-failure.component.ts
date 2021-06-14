import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paper } from '../paper';
// import { PaperDetails } from '../paper-details';

@Component({
  selector: 'app-dropbin-failure',
  templateUrl: './dropbin-failure.component.html',
  styleUrls: ['./dropbin-failure.component.css']
})
export class DropbinFailureComponent implements OnInit {
papers:string="";
paperDetails:Paper[]=[]
dropboxPaperDetails:Paper[]=[]

paper1:Paper=new Paper('Newspaper','Low',2)
paper2:Paper=new Paper('cardboard','Low',6)
paper3:Paper=new Paper('Notebooks','High',7);
paper4:Paper=new Paper('Newspaper','Low',2)
paper5:Paper=new Paper('cardboard','Low',6)
paper6:Paper=new Paper('Notebooks','High',7);
DummyPaperDetails:Paper[]=[this.paper1,this.paper2,this.paper3,this.paper4,this.paper5,this.paper6]
  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPaperDetails();
  }

  getPaperDetails(){
    this.ar.params.subscribe(params=>this.papers=params['papers'])
    this.paperDetails=JSON.parse(this.papers);  
    
    let pLength=this.paperDetails.length;
    for(let i=0;i<pLength;i++){
      this.dropboxPaperDetails[i]=this.DummyPaperDetails[i]

    }
     
  }

}

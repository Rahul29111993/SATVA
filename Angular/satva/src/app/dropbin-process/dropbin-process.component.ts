import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paper } from '../paper';

@Component({
  selector: 'app-dropbin-process',
  templateUrl: './dropbin-process.component.html',
  styleUrls: ['./dropbin-process.component.css']
})
export class DropbinProcessComponent implements OnInit {
status:string="";
papers:Paper[]=[];
  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.getStatus();
  }
getStatus(){
  this.ar.params.subscribe(params=>{this.status=params['status'],this.papers=params['papers']})
}
}

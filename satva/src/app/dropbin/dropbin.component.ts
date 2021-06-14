import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paper } from '../paper';

@Component({
  selector: 'app-dropbin',
  templateUrl: './dropbin.component.html',
  styleUrls: ['./dropbin.component.css']
})
export class DropbinComponent implements OnInit {
status:string="";
papers:Paper[]=[];
  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.getStatus();
  }
getStatus(){
  this.ar.params.subscribe((params)=>{this.status=params['status'];this.papers=params['papers']})
  // console.log(this.papers)
}

}

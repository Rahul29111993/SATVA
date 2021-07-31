import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sell-paper',
  templateUrl: './sell-paper.component.html',
  styleUrls: ['./sell-paper.component.css']
})
export class SellPaperComponent implements OnInit {

  customerId:number=0
  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    // this.getCustomerId();
  }
//   getCustomerId(){
// this.ar.parent?.params.subscribe((params)=>this.customerId=params['id'])

//   }

}

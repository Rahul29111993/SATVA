import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DropboxService } from '../dropbox.service';
import { Paper } from '../paper';

@Component({
  selector: 'app-dropbin',
  templateUrl: './dropbin.component.html',
  styleUrls: ['./dropbin.component.css']
})
export class DropbinComponent implements OnInit {
status:string="";
userName=''
papers:Paper[]=[];
  constructor(private ar:ActivatedRoute,private dropboxService:DropboxService) { }

  ngOnInit(): void {
    this.userName=this.dropboxService.username
    this.getStatus();
  }
getStatus(){
  this.ar.params.subscribe((params)=>{this.status=params['status'];this.papers=params['papers']})

}

}

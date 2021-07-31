import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locate',
  templateUrl: './locate.component.html',
  styleUrls: ['./locate.component.css']
})
export class LocateComponent implements OnInit {
  showLocations=true;

locations:any=undefined;
customerId:number=0
constructor(private ar:ActivatedRoute) { }

ngOnInit(): void {
  this.getCustomerId();
}
getCustomerId(){
this.ar.params.subscribe((params)=>this.customerId=params['id']);

}
  dropbox=[{pincode:1234,locations:["Cross-road street, Dallas","Ozone plaza, Dallas","Central park, Dallas"]},{pincode:3456,locations:["Starbucks street4, Chicago","Downtown street10, Chicago","Tree house, Chicago"]},{pincode:5678,locations:["location1","location2","location3"]},{pincode:9012,locations:["location1","location2","location3"]},{pincode:4567,locations:["location1","location2","location3"]}]
getLocations(pincode: any){
  for(let location of this.dropbox){
    if(location.pincode==pincode){
      this.locations=location.locations;
      break;
    }
    else{
      this.locations=true;
    }
  }
}
}

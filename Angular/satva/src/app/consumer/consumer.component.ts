import { Component, OnInit } from '@angular/core';
import { Consumer } from '../consumer';
import { UserService } from '../user.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {
user:string=''
consumerData:Consumer=new Consumer()
  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.getCustomerId()
  }
  getCustomerId(){

    
    var consumerId:string|null=sessionStorage.getItem('consumerId');
    if(consumerId!=null){
    this.us.getConsumer(parseInt(consumerId)).subscribe(
      data=>{
        this.consumerData=data
        this.user=this.consumerData.firmName
      }
    )
    }
      }
  
}

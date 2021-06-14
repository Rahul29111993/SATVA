import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {
email=""
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(loginForm: any){
    // console.log('loginForm')
  }
}

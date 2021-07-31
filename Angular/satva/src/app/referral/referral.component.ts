import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css']
})
export class ReferralComponent implements OnInit {
  userType=''
  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe(param=>this.userType=param.usertype)
  }

}

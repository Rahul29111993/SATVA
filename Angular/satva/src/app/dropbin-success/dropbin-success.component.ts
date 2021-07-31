import { Component, OnInit } from '@angular/core';
import { DropboxService } from '../dropbox.service';
import { UpdatetransactionService } from '../updatetransaction.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dropbin-success',
  templateUrl: './dropbin-success.component.html',
  styleUrls: ['./dropbin-success.component.css']
})
export class DropbinSuccessComponent implements OnInit {
rewardPoints:number=0
userName=''
  constructor(private uts:UpdatetransactionService,private dropboxService:DropboxService) { }

  ngOnInit(): void {
    this.rewardPoints=this.uts.getRewardPoints();
    this.userName=this.dropboxService.username
  }

}

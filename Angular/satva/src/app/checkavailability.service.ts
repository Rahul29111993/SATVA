import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paper } from './paper';
import { Papermaster } from './papermaster';
import { StoreIpService } from './store-ip.service';

@Injectable({
  providedIn: 'root'
})
export class CheckavailabilityService {



  newsPaperMedium = new Paper("Newspaper", 'Medium', 50);
  newsPaperLow = new Paper("Newspaper", 'Low', 30);
  newsPaperHigh = new Paper("Newspaper", 'High', 60);
  noteBooksMedium = new Paper("Notebooks", 'Medium', 50);
  noteBooksLow = new Paper("Notebooks", 'Low', 20);
  noteBooksHigh = new Paper("Notebooks", 'High', 40);
  cardBoardMedium = new Paper("Cardboard", 'Medium', 50);
  cardBoardLow = new Paper("Cardboard", 'Low', 20);
  cardBoardHigh = new Paper("Cardboard", 'High', 40);
  magazinesMedium = new Paper("Magazines", 'Medium', 50);
  magazinesLow = new Paper("Magazines", 'Low', 20);
  magazinesHigh = new Paper("Magazines", 'High', 40);
  shreddedMedium = new Paper("Shredded", 'Medium', 50);
  shreddedLow = new Paper("Shredded", 'Low', 20);
  shreddedHigh = new Paper("Shredded", 'High', 40);
  otherMedium = new Paper("Other", 'Medium', 5);
  otherLow = new Paper("Other", 'Low', 1);
  otherHigh = new Paper("Other", 'High', 0);
  paperAvailability: Paper[] = [this.newsPaperHigh, this.newsPaperLow, this.newsPaperMedium, this.cardBoardHigh, this.cardBoardLow, this.cardBoardMedium, this.noteBooksHigh, this.noteBooksLow, this.noteBooksMedium, this.magazinesHigh, this.magazinesMedium, this.magazinesLow, this.shreddedHigh, this.shreddedLow, this.shreddedMedium, this.otherHigh, this.otherLow, this.otherMedium
  ]

  paperMasterDetails:Papermaster[]=[]
  constructor(private http:HttpClient,private ipService:StoreIpService) { }
  url="http://"+this.ipService.ipAddress+":"+this.ipService.port+"/getPaperMasterDetails"
  
  
    getPaperMasterDetails():Observable<Papermaster[]>{
      
      return this.http.post<Papermaster[]>(this.url,'')
    }
}

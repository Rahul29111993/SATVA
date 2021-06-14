import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerComponent } from './consumer/consumer.component';
// import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { DropbinCancelComponent } from './dropbin-cancel/dropbin-cancel.component';
import { DropbinFailureComponent } from './dropbin-failure/dropbin-failure.component';
import { DropbinProcessComponent } from './dropbin-process/dropbin-process.component';
import { DropbinSuccessComponent } from './dropbin-success/dropbin-success.component';
import { DropbinComponent } from './dropbin/dropbin.component';
import { DropboxComponent } from './dropbox/dropbox.component';
import { HomeComponent } from './home/home.component';
import { LocateComponent } from './locate/locate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RewardsComponent } from './rewards/rewards.component';
import { SellPaperComponent } from './sell-paper/sell-paper.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login/:usertype',component:LoginComponent},
  {path:'register/:usertype',component:RegisterComponent},
  {path:'consumer',component:ConsumerComponent},
  {path:'customer',component:CustomerComponent,children:[
    {path:'',component:SellPaperComponent,outlet:'sidenavcontent'},
    {path:'sell',component:SellPaperComponent,outlet:'sidenavcontent'},
    {path:'rewards',component:RewardsComponent,outlet:'sidenavcontent'},
    {path:'locate',component:LocateComponent,outlet:'sidenavcontent'},    
  ]},
  {path:'dropbox',component:DropboxComponent},
  {path:'dropbin/:status',component:DropbinComponent},
  {path:'dropbin/:status/:papers',component:DropbinComponent}, 
  {path:'dropbinprocess/:status',component:DropbinProcessComponent},
  {path:'dropbinprocess/:status/:papers',component:DropbinProcessComponent},
  {path:'dropbinsuccess',component:DropbinSuccessComponent},
  {path:'dropbinfailure/:papers',component:DropbinFailureComponent},
  {path:'dropbincancel',component:DropbinCancelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

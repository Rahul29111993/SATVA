import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyPaperComponent } from './buy-paper/buy-paper.component';
import { CheckAvailabilityComponent } from './check-availability/check-availability.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { ContactusComponent } from './contactus/contactus.component';
// import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DropbinCancelComponent } from './dropbin-cancel/dropbin-cancel.component';
import { DropbinFailureComponent } from './dropbin-failure/dropbin-failure.component';
import { DropbinProcessComponent } from './dropbin-process/dropbin-process.component';
import { DropbinSuccessComponent } from './dropbin-success/dropbin-success.component';
import { DropbinComponent } from './dropbin/dropbin.component';
import { DropboxComponent } from './dropbox/dropbox.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LocateComponent } from './locate/locate.component';
import { LoginComponent } from './login/login.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
// import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PaymentComponent } from './payment/payment.component';
import { ReferralComponent } from './referral/referral.component';
import { RegisterComponent } from './register/register.component';
import { RewardsComponent } from './rewards/rewards.component';
import { SellPaperComponent } from './sell-paper/sell-paper.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login/:usertype',component:LoginComponent},
  {path:'register/:usertype',component:RegisterComponent},
  {path:'contact',component:ContactusComponent},
  {path:'consumer',component:ConsumerComponent,children:[
    {path:'',component:BuyPaperComponent,outlet:'sidenavcontent'},
    {path:'buy',component:BuyPaperComponent,outlet:'sidenavcontent'},
    {path:'checkavailability',component:CheckAvailabilityComponent,outlet:'sidenavcontent'},
    {path:'ordersummary',component:OrdersummaryComponent,outlet:'sidenavcontent'},
    {path:'payment',component:PaymentComponent,outlet:'sidenavcontent'},
    {path:'ordercomplete',component:OrderCompleteComponent,outlet:'sidenavcontent'},
    {path:'consumerdashboard/:usertype',component:DashboardComponent,outlet:'sidenavcontent'},
    {path:'consumerreferral/:usertype',component:ReferralComponent,outlet:'sidenavcontent'},
    {path:'consumerfeedback/:usertype',component:FeedbackComponent,outlet:'sidenavcontent'}
  ]},
  {path:'customer',component:CustomerComponent,children:[
    {path:'',component:SellPaperComponent,outlet:'sidenavcontent'},
    {path:'sell',component:SellPaperComponent,outlet:'sidenavcontent'},
    {path:'rewards',component:RewardsComponent,outlet:'sidenavcontent'},
    {path:'dashboard/:usertype',component:DashboardComponent,outlet:'sidenavcontent'},
    {path:'locate',component:LocateComponent,outlet:'sidenavcontent'}, 
    {path:'referral/:usertype',component:ReferralComponent,outlet:'sidenavcontent'},
    {path:'feedback/:usertype',component:FeedbackComponent,outlet:'sidenavcontent'}   
  ]},
  {path:'dropbox',component:DropboxComponent},
  {path:'dropbin/:status',component:DropbinComponent},  
  {path:'dropbinprocess/:status',component:DropbinProcessComponent},
  {path:'dropbinsuccess',component:DropbinSuccessComponent},
  {path:'dropbinfailure',component:DropbinFailureComponent},
  {path:'dropbincancel',component:DropbinCancelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

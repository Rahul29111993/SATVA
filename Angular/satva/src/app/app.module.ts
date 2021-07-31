import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SellPaperComponent } from './sell-paper/sell-paper.component';
import { RewardsComponent } from './rewards/rewards.component';
import { LocateComponent } from './locate/locate.component';
import { DropboxComponent } from './dropbox/dropbox.component';
import { DropbinComponent } from './dropbin/dropbin.component';
import { DropbinProcessComponent } from './dropbin-process/dropbin-process.component';
import { DropbinSuccessComponent } from './dropbin-success/dropbin-success.component';
import { DropbinFailureComponent } from './dropbin-failure/dropbin-failure.component';
import { DropbinCancelComponent } from './dropbin-cancel/dropbin-cancel.component';
import {HttpClientModule} from '@angular/common/http';
import {SlideshowModule} from 'ng-simple-slideshow';
import {ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyPaperComponent } from './buy-paper/buy-paper.component';
import { ReferralComponent } from './referral/referral.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CheckAvailabilityComponent } from './check-availability/check-availability.component';
// import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import {RouterModule} from '@angular/router';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { ContactusComponent } from './contactus/contactus.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ConsumerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SellPaperComponent,
    RewardsComponent,
    LocateComponent,
    DropboxComponent,
    DropbinComponent,
    DropbinProcessComponent,
    DropbinSuccessComponent,
    DropbinFailureComponent,
    DropbinCancelComponent,
    DashboardComponent,
    BuyPaperComponent,
    ReferralComponent,
    FeedbackComponent,
    CheckAvailabilityComponent,
   
    PaymentComponent,
    OrderCompleteComponent,
    OrdersummaryComponent,
    ContactusComponent
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    SlideshowModule,
    ReactiveFormsModule,
    ChartsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

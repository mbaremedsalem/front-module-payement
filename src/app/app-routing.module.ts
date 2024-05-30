import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { AcueilComponent } from './acueil/acueil.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SupportComponent } from './support/support.component';
import { AccountComponent } from './account/account.component';
import { WithdrawmoneyComponent } from './withdrawmoney/withdrawmoney.component';
import { DepositmoneyComponent } from './depositmoney/depositmoney.component';
import { CryptoComponent } from './crypto/crypto.component';
import { ReceipientsComponent } from './receipients/receipients.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ReceiveComponent } from './receive/receive.component';
import { PayComponent } from './pay/pay.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  {
    path:'login',
    component:PageLoginComponent
  },
  {
    path:'otp',
    component:OtpComponent,
  },
  // {
  //   path:'inscrire',
  //   component:PageInscriptionComponent
  // },
  {
    path:'',
    component:PageDashboardComponent,
    children:[
      {
        path:'acueil',
        component:AcueilComponent,
      },
      {
        path:'transactions',
        component:TransactionsComponent,
      },
      {
        path:'pay',
        component:PayComponent,
      },     
       {
        path:'receive',
        component:ReceiveComponent,
      },     
       {
        path:'exchange',
        component:ExchangeComponent,
      },      
      {
        path:'receipients',
        component:ReceipientsComponent,
      },      
      {
        path:'crypto',
        component:CryptoComponent,
      },
      {
        path:'deposit-money',
        component:DepositmoneyComponent,
      },

      {
        path:'withdraw-money',
        component:WithdrawmoneyComponent,
      },
      {
        path:'account',
        component:AccountComponent,
      },
      {
        path:'support',
        component:SupportComponent,
      },
        ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

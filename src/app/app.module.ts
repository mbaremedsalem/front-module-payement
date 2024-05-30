import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {MatBadgeModule} from '@angular/material/badge';
import { AcueilComponent } from './acueil/acueil.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { PayComponent } from './pay/pay.component';
import { ReceiveComponent } from './receive/receive.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ReceipientsComponent } from './receipients/receipients.component';
import { CryptoComponent } from './crypto/crypto.component';
import { DepositmoneyComponent } from './depositmoney/depositmoney.component';
import { WithdrawmoneyComponent } from './withdrawmoney/withdrawmoney.component';
import { AccountComponent } from './account/account.component';
import { SupportComponent } from './support/support.component';
import { UserCardComponent } from './user-card/user-card.component';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AddCardComponent } from './add-card/add-card.component';
import { FormsModule } from '@angular/forms';
// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { OrganizationChartModule } from 'primeng/organizationchart'; // Import the OrganizationChartModule
import { MessageService } from 'primeng/api'; 
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DataViewModule } from 'primeng/dataview';

import { PasswordModule } from 'primeng/password';
import { InputOtpModule } from 'primeng/inputotp';
import { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageDashboardComponent,
    HeaderComponent,
    MenuComponent,
    AcueilComponent,
    TransactionsComponent,
    PayComponent,
    ReceiveComponent,
    ExchangeComponent,
    ReceipientsComponent,
    CryptoComponent,
    DepositmoneyComponent,
    WithdrawmoneyComponent,
    AccountComponent,
    SupportComponent,
    UserCardComponent,
    TransactionTableComponent,
    StatisticsComponent,
    AddCardComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    FormsModule,
    ButtonModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    DynamicDialogModule,
    DropdownModule,
    TagModule,
    RatingModule,
    FileUploadModule,
    ToolbarModule,
    ToastModule,
    OrganizationChartModule,
    DividerModule,
    TabViewModule,
    AvatarModule,
    BadgeModule,
    FloatLabelModule,
    PasswordModule,
    InputOtpModule,
    DataViewModule,
    
    // StepperModule ,
    // InputTextModule ,
    // ToggleButtonModule ,
    // IconFieldModule ,
    // InputIconModule ,
    // PasswordModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

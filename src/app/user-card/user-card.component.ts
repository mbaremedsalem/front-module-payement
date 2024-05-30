import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  user = { name: 'M\'bare', balance: 100.460 };
  selectedCurrency = 'MRU';
  currencies = ['MRU', 'EUR', 'GBP'];
  lastTransactions = ['Transaction 1', 'Transaction 2'];

  constructor() {}
}

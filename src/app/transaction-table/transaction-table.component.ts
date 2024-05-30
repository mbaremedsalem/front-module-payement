import { Component } from '@angular/core';
import { Product } from '../model/transaction-model';
import { TransactionServiceService } from '../service/transaction-service.service';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent {
  products!: Product[];

  constructor(private transactionService: TransactionServiceService) {}

  ngOnInit() {
    this.transactionService.getTransactionMini().then((data) => {
        this.products = data;
    });
}
}

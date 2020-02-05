import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'transactions',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  public transactions = []
  public errorMsg;

  constructor(private _transactionService: TransactionService) { }

  ngOnInit() {
    this._transactionService.getTransaction().subscribe(
      data => this.transactions = data,
      error => this.errorMsg = error.message);
  }

}

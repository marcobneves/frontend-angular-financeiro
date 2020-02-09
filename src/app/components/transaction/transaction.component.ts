import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';
import { formatCurrency } from '../../util/helpers'
import { IListaControleLancamento, ITransacao } from 'src/app/interface/transation';

@Component({
  selector: 'transactions',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  public transactionsData: ITransacao;
  public transactionsPaid: Array<IListaControleLancamento>;
  public transactionsNotPaid: Array<IListaControleLancamento>;
  public transactions: Array<IListaControleLancamento>;
  public transactionFilter: Array<IListaControleLancamento>;
  public errorMsg;
  public formatCurrencyBr = formatCurrency;

  public filter = {
    pago: false,
    pendente: false
  }

  constructor(private _transactionService: TransactionService) { }

  ngOnInit() {
    this._transactionService.getTransaction().subscribe(
      data => {
        this.transactionsData = data;
        this.transactions = data.listaControleLancamento;
      },
      error => this.errorMsg = error.message);
  }

  // Apply filter
  filterGetTransaction(event) {
    // Reset data
    this.transactionFilter = [];
    this.transactionsPaid = []
    this.transactionsNotPaid = []
    this.transactions = this.transactionsData.listaControleLancamento;
    
    //Get checked
    let status = event.srcElement.checked;
    if (event.srcElement.value === "pago") {
      this.filter.pago = status;
    } else {
      this.filter.pendente = status;
    }
    if (this.filter.pago) {
      this.transactionsPaid = this.transactions.filter(item => item.lancamentoContaCorrenteCliente.nomeSituacaoRemessa === "Pago")
    }
    if (this.filter.pendente) {
      this.transactionsNotPaid = this.transactions.filter(item => item.lancamentoContaCorrenteCliente.nomeSituacaoRemessa === "Pendente")
    }
    this.transactionFilter = this.transactionFilter.concat(this.transactionsPaid, this.transactionsNotPaid)
    if (this.transactionFilter.length) {
      this.transactions = this.transactionFilter;
    }

  }

}

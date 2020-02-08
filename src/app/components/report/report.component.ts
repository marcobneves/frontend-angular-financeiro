import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/interface/report';
import { TransactionService } from 'src/app/service/transaction.service';
import { formatCurrency } from '../../util/helpers'

@Component({
  selector: 'transaction-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})

export class ReportComponent implements OnInit {

  public reports: Report[];
  public transactions = {}
  public resultsPaid = [];
  public resultsNotPaid = [];
  public resultsAmountPaid;
  public resultsAmountNotPaid;
  public transactionTotalMonth = [];
  public errorMsg;

  constructor(private _transactionService: TransactionService) { }

  // Config chart
  HandleReportAmount() {

    this.reports = [
      {
        title: 'Quantidade de transações',
        type: 'Line',
        data: {
          "labels": [
            "Jan",
            "Feb",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez"
          ],
          "series": [Object.values(this.transactionTotalMonth)]
        },
        options: {
          low: 0,
          showArea: true
        },
        resume: {
          paid: {
            title: '(Qtd) Pago',
            total: this.resultsPaid.length ? this.resultsPaid.length : 0,
          },
          notPaid: {
            title: '(Qtd) Pendente',
            total: this.resultsNotPaid.length ? this.resultsNotPaid.length : 0,
          }
        }
      },
      {
        title: 'Situação de transações',
        data: {
          labels: [`${this.getPercent(this.resultsPaid.length)}`, `${this.getPercent(this.resultsNotPaid.length)}`],
          series: [35, 65]
        },
        options: {
          donut: true,
          showLabel: true
        },
        type: 'Pie',
        resume: {
          paid: {
            title: 'Pago',
            total: `${this.resultsAmountPaid}`,
          },
          notPaid: {
            title: 'Pendente',
            total: `${this.resultsAmountNotPaid}`,
          }
        }
      }
    ];
  }

  // Calc total percent
  getPercent(value) {
    let totalPercent = (value * 100) / (this.resultsPaid.length + this.resultsNotPaid.length);
    return `${totalPercent.toString().slice(0, 4)}%`;
  }

  // Group total type transaction 
  getTypeTransaction(data, filter) {
    return data.listaControleLancamento.filter(item => item.lancamentoContaCorrenteCliente.nomeSituacaoRemessa === filter)
  }

  // Converter (R$)
  // formatCurrency(amount) {
  //   return (amount).toLocaleString('pt-BR');
  // }

  // Calc of the sum for all transactions
  getAmountTransaction(data) {
    return formatCurrency(data.reduce((sum, item) => sum + item.valorLancamentoRemessa, 0))
  }

  // Group all transaction
  getTotalTransaction(data) {
    data.listaControleLancamento.forEach(transaction => {
      const monthKey = transaction.dataEfetivaLancamento.slice(3);
      this.transactionTotalMonth[monthKey] = (this.transactionTotalMonth[monthKey] ? this.transactionTotalMonth[monthKey] : 0) + 1;
    });
  }

  // Identify all transaction
  getObjectReportAmountTotal(data) {
    this.transactions = data;
    this.resultsPaid = this.getTypeTransaction(data, "Pago");
    this.resultsNotPaid = this.getTypeTransaction(data, "Pendente");
    this.resultsAmountPaid = this.getAmountTransaction(this.resultsPaid);
    this.resultsAmountNotPaid = this.getAmountTransaction(this.resultsNotPaid);
  }

  //Get all transaction
  getTransactions() {
    this._transactionService.getTransaction().subscribe(
      data => {
        this.getObjectReportAmountTotal(data);
        this.getTotalTransaction(data);
        this.HandleReportAmount()
      },
      error => this.errorMsg = error.message);
  }

  ngOnInit() {
    this.getTransactions();
  }

}

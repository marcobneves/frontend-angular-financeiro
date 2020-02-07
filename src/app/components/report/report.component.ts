import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/interface/report';

declare var require: any;
const data: any = require('./data.json');

@Component({
  selector: 'transaction-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})

export class ReportComponent implements OnInit {

  public reports: Report[];

  constructor() {
    
    // report objetc
    this.reports = [
      {
        title: 'Quantidade de transações',
        type: 'Line',
        data: data.LineWithArea,
        options: {
          low: 0,
          showArea: true
        },
        resume: {
          paid: {
            title:'Processadas',
            total: 30450,
          },
          notPaid: {
            title:'Não processadas',
            total: 15210,
          }
        }
      },
      {
        title: 'Situação de transações',
        data: data.Pie,
        options: {
          donut: true,
          showLabel: true
        },
        type: 'Pie',
        resume: {
          paid: {
            title:'Processadas 35%',
            total: '23.434,00',
          },
          notPaid: {
            title:'Não processadas 65%',
            total: '12.212,00',
          }
        }
      },
    ];


  }
  ngOnInit() {
  }


}

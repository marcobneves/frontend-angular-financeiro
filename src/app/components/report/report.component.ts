import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

import { ChartEvent, ChartType } from 'ng-chartist';

declare var require: any;

const data: any = require('./data.json');

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'transaction-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})

export class ReportComponent implements OnInit {

  public charts: Chart[];
  public reportsTitle = ['Resumo de quantidade de transações', "Transações por status"]
  constructor() {
    this.charts = [
      {
        data: data.LineWithArea,
        options: {
          low: 0,
          showArea: true
        },
        type: 'Line'
      },
      {
        data: data.Pie,
        options: {
          donut: true,
          showLabel: false
        },
        type: 'Pie'
      },
    ];
  }
  ngOnInit() {
  }


}

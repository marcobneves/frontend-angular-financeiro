
import * as Chartist from 'chartist';
import { ChartType } from 'ng-chartist';

export interface Report {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  title: String;
  resume: any;
}

export interface IReportMonthAmount {
  notPaidTotal: number;
  paidTotal: number;
  monthsTotal: any;
}

export interface IReportMonthTotal {
  notPaid?: any;
  paid?: any;
}

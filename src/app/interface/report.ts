
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
  
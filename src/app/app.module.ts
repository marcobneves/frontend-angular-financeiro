import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionService } from './service/transaction.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { ChartistModule } from 'ng-chartist'; 
import { ReportComponent } from './components/report/report.component';
import { config } from '../api/config';


@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    MenuComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartistModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

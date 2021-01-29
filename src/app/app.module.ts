import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CaseChartComponent } from './case-chart/case-chart.component';
import { Service } from './service/service.service';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    CaseChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule.forRoot(),
    HttpClientModule
  ],
  providers: [Service],
  bootstrap: [CaseChartComponent]
})
export class AppModule { }

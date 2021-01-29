import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from '../service/service.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-case-chart',
  templateUrl: './case-chart.component.html',
  styleUrls: ['./case-chart.component.css']
})

export class CaseChartComponent implements OnInit {
  names: Array<any>;
  weeks: any;
  showResult: boolean = false;
  options = {
    title: 'Weekly Covid-19 Cases And Deaths',
      vAxes: { 
        0: {
          title: "Cases",
          viewWindow: { min: 0 }},
      1: {
        title: "Deaths",
        viewWindow: { min: 0 } },
    },
    series: {
       0: {targetAxisIndex: 0},
       1: {targetAxisIndex: 1}
    },
    legend: 'none' ,
    height: 800
   };
  chartType = 'LineChart';
  @ViewChild('mychart', {static: false}) mychart: any;

  constructor(
    private service: Service) { }

  ngOnInit() {
    this.service.getCountryList().subscribe(data => {
      this.names = data;
    });

  }

  getData(selected) {
    console.log(selected);
    this.service.getWeekList(selected).subscribe(result => {
      this.showResult = true;
      this.weeks = result.map(function(item, keys) {
        var mixarray = Object.values(item);
        return mixarray;
        
        });
  
        // this.mychart.draw(this.cartkey);
    }, error => console.error(error));
  }
}
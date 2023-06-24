import { Component, OnInit } from '@angular/core';
import  * as D3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(D3)
    
  }

}

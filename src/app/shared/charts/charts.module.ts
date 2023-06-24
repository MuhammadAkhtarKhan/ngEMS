import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';



@NgModule({
  declarations: [
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    DonutChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    DonutChartComponent]
})
export class ChartsModule { }

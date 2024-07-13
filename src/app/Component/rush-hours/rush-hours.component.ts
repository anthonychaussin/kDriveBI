import {Component, Input, ViewChild} from '@angular/core';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'app-rush-hours',
  templateUrl: './rush-hours.component.html',
  styleUrl: './rush-hours.component.scss'
})
export class RushHoursComponent {
  @Input('stats') stats!: {};
  @ViewChild("rushHoursChart") rushHoursChart: Chart | undefined;
  public chart: any;

  ngAfterViewInit(): void {
    this.chart = new Chart('rushHoursChart', {
      type: 'line',
      data: {
        datasets: [{
          label: 'Rush Hours',
          data: this.stats,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.4
        }]
      },
    });
  }

}

import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'app-reppeted-action-type',
  templateUrl: './reppeted-action-type.component.html',
  styleUrl: './reppeted-action-type.component.scss'
})
export class ReppetedActionTypeComponent implements AfterViewInit{
  @Input() stats: {} = {};
  public chart: any;

  constructor() {
  }

  ngAfterViewInit(): void {
    let statistics = Object.entries(this.stats);
    if (statistics && statistics.length > 0) {
      let temp = statistics
        .filter(s => s[1] as number > 1)
        .sort((a, b) => b[1] as number - (a[1] as number))
        .map(s => Object.assign({}, {x: s[0], y: s[1] as number}))
        ;
      this.chart = new Chart('distributionActionChart', {
        type: 'bar',
        data: {
          datasets: [{data:temp}]
        },
        options: {
          responsive: true,
          scales: {
            x:{
              display: true
            },
            y: {
              display:true,
              type: 'logarithmic'
            }
          },
        }
      });
    }
  }
}

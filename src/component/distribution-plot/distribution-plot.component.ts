import { Component, Input } from '@angular/core';
import { BoxPlotService } from '../../service/box-plot.service';

import Chart from 'chart.js/auto';
import { PlotlyService } from '../../service/plotly.service';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-distribution-plot',
  imports: [PlotlyModule],
  templateUrl: './distribution-plot.component.html',
  styleUrl: './distribution-plot.component.scss'
})
export class DistributionPlotComponent {

  @Input() item: any;

  graph = {
    data: [],
    layout: { title: '' },
    config: { responsive: true },
  };


  constructor(public service: BoxPlotService, private plot: PlotlyService) { }

  public ngOnInit(): void {
    console.log(this.item);
    this.graph = this.item.plot;
  }

}

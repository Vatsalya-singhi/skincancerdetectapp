import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { DistributionPlotComponent } from "../component/distribution-plot/distribution-plot.component";
import { BoxPlotService } from '../service/box-plot.service';
import { GridsterComponent, GridsterItemComponent } from 'angular-gridster2';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';


@Component({
  selector: 'app-dashboard',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatGridListModule, MatListModule, MatDividerModule, MatCardModule, DistributionPlotComponent, GridsterComponent, GridsterItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  public plotList = [];
  public options: GridsterConfig = {
    itemChangeCallback: this.itemChange,
    itemResizeCallback: this.itemResize,
  };

  public dashboard: Array<GridsterItem> = [];

  constructor(public service: BoxPlotService) {
    this.service.getUserPlot()
      .subscribe((payload: any) => {
        console.log(payload);
        this.plotList = payload.data.plots;
        this.dashboard = [];
        this.plotList.forEach((obj: any) => {
          this.dashboard.push({
            cols: obj.display_layout.cols ?? 0,
            rows: obj.display_layout.rows ?? 0,
            x: obj.display_layout.x ?? 0,
            y: obj.display_layout.y ?? 0,
          });
        })
      })
  }

  itemChange() {
    console.info('itemChanged');
  }

  itemResize() {
    console.info('itemResized');
  }

  removeItem(item: any) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({} as any);
  }

}

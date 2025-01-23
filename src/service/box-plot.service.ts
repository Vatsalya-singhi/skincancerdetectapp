import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoxPlotService {

  constructor(public http: HttpClient) { }

  public getUserPlot() {
    return this.http.get("https://beta-backend.aicuflow.com/visualization/user-plot?project_id=27&show_fig=True&cursor=0&limit=4");
  }

  public createPlot(data: any) {
    return this.http.post("https://beta-backend.aicuflow.com/visualization/user-plot/?file_id=125&store_in_SelectedPlot=True&show_fig=True", data);
  }

  public patchPlot(id: string, data: any) {
    return this.http.patch(`https://beta-backend.aicuflow.com/visualization/user-plot/${id}/`, data);
  }

  public deletePlot(id: string) {
    return this.http.delete(`https://beta-backend.aicuflow.com/visualization/user-plot/${id}/`);
  }


}

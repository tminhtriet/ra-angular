import { Component, OnInit, ElementRef} from '@angular/core';
import { InitUtilsService } from '../../../service/init-utils.service';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent implements OnInit {

  date: String;

  constructor(
    private _elmRef: ElementRef,
    private utilsService: InitUtilsService
  ) { }

  ngOnInit() {
    this.utilsService.setElmRef(this._elmRef);
    this.utilsService.create_calendar_month();
  }

  public searchDashboardChart(newValue){
    console.log(this.date);
    console.log(newValue);
  }
}

import { Component, OnInit, ElementRef} from '@angular/core';
import { InitUtilsService } from '../../../service/init-utils.service';
import { DashboardChartService } from './service/dashboard-chart.service';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent implements OnInit {

  constructor(
    private _elmRef: ElementRef,
    private utilsService: InitUtilsService,
    private _dashboardService: DashboardChartService
  ) {  }

  ngOnInit() {
    this.utilsService.setElmRef(this._elmRef);
    this.utilsService.create_calendar_month();
    this.loadDashboard1();
  }

  loadDashboard1(){
    this._dashboardService.dashboartChart1(3, 2017, '3S').subscribe(data => {
      let rs = JSON.parse(JSON.stringify(data.result));
      console.log(rs);
    });
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [];
}

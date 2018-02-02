import { Component, OnInit, ElementRef} from '@angular/core';
import { DatePipe } from '@angular/common';
import { InitUtilsService } from '../../../service/init-utils.service';
import { DashboardChartService } from './service/dashboard-chart.service';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent implements OnInit {
  dataNull = false;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:any = {
    position: 'bottom'
  };
 
  public barChartData:any[] = [];

  constructor(
    private _elmRef: ElementRef,
    private utilsService: InitUtilsService,
    private _dashboardService: DashboardChartService,
    private _datePipe: DatePipe
  ) {  }

  ngOnInit() {
    this.utilsService.setElmRef(this._elmRef);
    this.utilsService.create_calendar_month();
    this.loadDashboard1();
  }

  loadDashboard1(){
    var farYearNow = [];
    var farOthYearNow = [];
    var farYearPer = [];
    var farOthYearPer = [];

    this._dashboardService.dashboartChart1(3, 2017, '3S').subscribe(data => {
      let rs = JSON.parse(JSON.stringify(data.result));
      rs.forEach(e => {
        this.barChartLabels.push(e.month);

        farYearNow.push(e.fare_year_now);
        farOthYearNow.push(e.other_year_now);
        farYearPer.push(e.fare_year_now_per_1);
        farOthYearPer.push(e.other_year_now_per_1);


      });

      this.barChartData = [
        {data: farYearPer, label: 'TO 2016', stack: 'group 2'},
        {data: farOthYearPer, label: 'Other TO 2016', stack: 'group 2'},
        {data: farYearNow, label: 'TO 2017', stack: 'group 1'},
        {data: farOthYearNow, label: 'Other TO 2017', stack: 'group 1'}
      ];

      console.log(this.barChartData);

      this.dataNull = true;
    });
  }

}

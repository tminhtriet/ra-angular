import { Component, OnInit, ElementRef} from '@angular/core';
import { InitUtilsService } from '../../../service/init-utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _elmRef: ElementRef,
    private utilsService: InitUtilsService
  ) { }

  ngOnInit() {
    this.utilsService.setElmRef(this._elmRef);
    this.utilsService.create_calendar_month();
  }

}

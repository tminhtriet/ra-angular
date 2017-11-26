import { Component, OnInit, ElementRef } from '@angular/core';
import { InitUtilsService } from '../../../../service/init-utils.service';
declare var jQuery: any;

@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.css']
})
export class ListSalesComponent implements OnInit {

  constructor(
    private _elmRef: ElementRef,
    private utilsService: InitUtilsService
  ) { }

  ngOnInit() {
    this.utilsService.setElmRef(this._elmRef);

    this.utilsService.create_select_2();
    this.utilsService.create_calendar_month();
    this.utilsService.create_calendar_date();
  }

}

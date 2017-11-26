import { Injectable, ElementRef } from '@angular/core';

declare var jQuery: any;

@Injectable()
export class InitUtilsService {

  _elmRef: ElementRef;

  constructor() { }

  create_calendar_month(){
    jQuery(this._elmRef.nativeElement).
    find('.input-group.date.month').datepicker({
        minViewMode: 1,
        format: "mm/yyyy",
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true,
        todayHighlight: true
    });
  }

  create_calendar_date(){
    jQuery(this._elmRef.nativeElement).
    find('.input-group.date').datepicker({
        format: "dd/mm/yyyy",
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true,
        todayHighlight: true
    });
  }

  create_select_2(){
    jQuery(this._elmRef.nativeElement).
    find('.select2_custom').select2();
  }

  public setElmRef(_elmRef: ElementRef){
    this._elmRef = _elmRef;
  }
}

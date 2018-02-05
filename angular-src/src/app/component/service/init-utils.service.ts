import { Injectable, ElementRef } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import { LoginService } from '../login/service/login.service';

declare var jQuery: any;

@Injectable()
export class InitUtilsService implements CanActivate {

  _elmRef: ElementRef;

  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) { }

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

  canActivate(){
    if(this._loginService.loggedIn()){
        console.log("User login success");
        return true;
    } else {
        console.log("User not login");
        this._router.navigate(['/login']);
        return false;
    }
  }

  getUserLogin(){
    return this._loginService.user;
  }
}

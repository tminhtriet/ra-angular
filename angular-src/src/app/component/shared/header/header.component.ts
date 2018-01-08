import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ra-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _router: Router,
    private _loginService: LoginService
  ) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this._loginService.logout();
    this._router.navigate(["/login"]);

  //   return false;
    console.log('Logout');
  }

}

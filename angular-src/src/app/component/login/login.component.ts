import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private _flashMessageService: FlashMessagesService,
    private _loginService: LoginService,
    private _router: Router
  ) { }

  ngOnInit() {
    
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    if(!this._loginService.validateLogin(user)){
      this._flashMessageService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    this._loginService.authUser(user).subscribe(data => {

      if(data.success){
        this._loginService.storeUserData(data.token, data.user);
        console.log("Login success!!!");
        window.location.href = '/secure/dashboard';
      } else {
        this._flashMessageService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        this._router.navigate(['/login']);
      }
    });
  }

}

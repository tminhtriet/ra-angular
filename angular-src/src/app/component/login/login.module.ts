import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {FlashMessagesModule} from 'angular2-flash-messages'

import { LoginComponent } from './login.component';

import { LoginService } from './service/login.service';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        CommonModule, 
        RouterModule,
        FlashMessagesModule.forRoot()
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: [LoginService]
})

export class LoginModule {}
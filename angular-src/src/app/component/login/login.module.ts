import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';

@NgModule({
    imports: [BrowserModule, FormsModule, CommonModule, RouterModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: []
})

export class LoginModule {}
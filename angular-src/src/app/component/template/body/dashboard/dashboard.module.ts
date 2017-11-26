import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpModule,
        CommonModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashboardModule {}
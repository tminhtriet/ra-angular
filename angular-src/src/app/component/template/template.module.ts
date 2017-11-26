import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { InitUtilsService } from '../service/init-utils.service';

import { TemplateComponent } from './template.component';
import { FooterComponent, MenuComponent, HeaderComponent } from '../shared/index';
import { DashboardComponent } from './body/dashboard/dashboard.component';
import { DashboardChartComponent } from './body/dashboard-chart/dashboard-chart.component';
import { ListSalesComponent } from './body/sales/list-sales/list-sales.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        RouterModule
    ],
    declarations: [
        TemplateComponent, 
        FooterComponent, 
        MenuComponent, 
        HeaderComponent, 
        DashboardComponent,
        DashboardChartComponent,
        ListSalesComponent
    ],
    providers: [
        InitUtilsService
    ],
    exports: [TemplateComponent, FooterComponent, MenuComponent, HeaderComponent]
})

export class TemplateModule {}
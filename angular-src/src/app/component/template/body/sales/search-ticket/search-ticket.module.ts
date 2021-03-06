import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { SearchTicketComponent } from './search-ticket.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpModule,
        CommonModule
    ],
    declarations: [
        SearchTicketComponent
    ],
    exports: [
        SearchTicketComponent
    ]
})

export class SearchTicketModule {}
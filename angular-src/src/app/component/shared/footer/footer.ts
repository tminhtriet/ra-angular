import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'ra-footer',
    templateUrl: 'footer.html'
})

export class FooterComponent implements OnInit{
    datetime: String = "";

    constructor(){

    }

    ngOnInit(){
        this.datetime = this.setCurrentDate();
    }

    setCurrentDate(){
        var current = new Date();

        return "© 2007 - " + current.getFullYear();
    }
}
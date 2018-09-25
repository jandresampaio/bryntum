import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>               
                <gantt></gantt>`
})

export class AppComponent implements OnInit {
    title      = 'Angular 4 demo';
    eventTitle = '';

    ngOnInit(){
       
    }

}

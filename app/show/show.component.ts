import {Component, OnInit, Input} from '@angular/core';
import {Show} from '../models/show';
@Component({
    selector: 'show-component',
    templateUrl: 'app/show/show.component.html',
    styleUrls: ['app/show/show.component.css']
})
export class ShowComponent implements OnInit {
    constructor() {
    }

    @Input() show: Show;
    fullDetailsToggle: boolean;

    ngOnInit() {
    }

    onFullDetailsClick(event) {
        event.stopPropagation();
        this.fullDetailsToggle = !this.fullDetailsToggle;
    }
}

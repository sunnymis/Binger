import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
    @Input() fullDetailsEnabled: boolean;
    @Output() hoverModeEmitter = new EventEmitter();
    fullDetailsToggle: boolean;

    ngOnInit() {
    }

    onFullDetailsClick(event) {
        event.stopPropagation();
        this.fullDetailsToggle = !this.fullDetailsToggle;
        this.hoverModeEmitter.emit(this.fullDetailsToggle);
    }

    handleOnMouseOver(event) {
        if (this.fullDetailsEnabled) {
            this.fullDetailsToggle = true;
        }
    }
}

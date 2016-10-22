import {Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges} from '@angular/core';

import { Show } from '../models/show.ts';
import { ShowService } from '../services/show.service';

@Component({
    selector: 'search-overlay',
    templateUrl: 'app/search-overlay/search-overlay.component.html',
    styleUrls: ['app/search-overlay/search-overlay.component.css']
})
export class SearchOverlayComponent implements OnInit {

    allShows: Show[];
    currentShows: Show[];
    nextShows: Show[];
    searchedShows: Show[] = [];
    @Input() overlayEnabled: boolean;
    @Output() overlayEnabledEmitter = new EventEmitter();
    @ViewChild('overlaySearchBox') overlaySearchBox;

    constructor(private showService: ShowService) {
        //this.overlaySearchBox.nativeElement.focus();
    }

    getShows() {
        return this.showService.getShows()
            .subscribe((shows => this.allShows = shows),
                () => {
                },
                () => {
                    this.currentShows = this.allShows.filter(show => show.UserType === "current");
                    this.nextShows = this.allShows.filter(show => show.UserType === "next");
                });
    }

    ngOnInit() {
        this.getShows();
    }

    ngOnChanges() {
        if (this.overlayEnabled === true) {
            this.overlaySearchBox.nativeElement.focus();
        }
    }




    closeOverlay(event) {
        this.overlayEnabledEmitter.emit(false);
    }

    handleOverlayKeyDown(event) {
        if (event.which === 27) { //Escape
            this.closeOverlay(null);
        }
    }

    handleOnInputChange(text) {
        let result: any[] = [];
        let result2: any[] = [];
        this.showService.getShows()
            .subscribe((shows => this.allShows = shows),
                () => {
                },
                () => {
                    this.searchedShows = this.allShows.filter(show => show.Title.toLowerCase().indexOf(text.toLowerCase()) !== -1);
                });
    }
}

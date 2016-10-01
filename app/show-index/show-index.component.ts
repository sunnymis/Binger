import {Component, OnInit, ViewChild} from '@angular/core';

import {Show} from '../models/show.ts';
import {ShowService} from '../services/show.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'show-index',
    templateUrl: 'app/show-index/show-index.component.html',
    styleUrls: ['app/show-index/show-index.component.css']
})
export class ShowIndexComponent implements OnInit {

    allShows: Show[];
    currentShows: Show[];
    nextShows: Show[];
    searchedShows: Show[] = [];
    overlayEnabled: boolean = false;
    @ViewChild('overlaySearchBox') overlaySearchBox;

    constructor(private showService: ShowService) {
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

    openOverlay(event) {
        this.overlayEnabled = true;
        this.overlaySearchBox.nativeElement.focus();
    }
    closeOverlay(event) {
        this.overlayEnabled = false;
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
        console.log(this.searchedShows);
    }
}

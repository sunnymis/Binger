import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {ShowService} from '../services/show.service';
import {Show} from '../models/show';


@Component({
    selector: 'show-details',
    templateUrl: 'app/show-details/show-details.component.html',
    styleUrls: ['app/show-details/show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

    shows: Show[];
    show: Show;

    constructor(private showService: ShowService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.showService.getShows()
                .subscribe(shows => this.shows = shows,
                    () => {
                    },
                    () => {
                        this.show = this.shows.filter(s => s.imdbID === id)[0];
                        console.log(this.show);
                    });
        });
    }
}

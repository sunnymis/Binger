import { Component, OnInit } from '@angular/core';

import { ShowService } from '../services/show.service';
import { Show } from '../models/show';

@Component({
  selector: 'finished-shows',
  templateUrl: 'app/finished-shows/finished-shows.component.html',
})
export class FinishedShowsComponent implements OnInit {
  constructor(private showService: ShowService) {  }

  finishedShows: Show[];

  ngOnInit() {
    this.getShows();
  }

  getShows() {
    return this.showService.getShows()
        .subscribe(shows => this.finishedShows =
              shows.filter(s => s.UserType === 'finished'));
  }
}

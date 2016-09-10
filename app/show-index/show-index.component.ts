import { Component, OnInit } from '@angular/core';

import { Show } from '../models/show.ts';
import { ShowService } from '../services/show.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'show-index',
  templateUrl: 'app/show-index/show-index.component.html'
})
export class ShowIndexComponent implements OnInit {

  allShows: Show[];
  currentShows: Show[];
  nextShows: Show[];

  constructor(private showService: ShowService) {
   }

  getShows() {
      return this.showService.getShows()
              .subscribe((shows => this.allShows = shows),
              () => {},
              () => {
                this.currentShows = this.allShows.filter(show => show.UserType === "current");
                this.nextShows = this.allShows.filter(show => show.UserType === "next");
              });
  }

  ngOnInit() {
      this.getShows();
  }
}

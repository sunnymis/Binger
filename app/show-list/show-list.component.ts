import { Component, OnInit } from '@angular/core';
import { Show } from '../models/show';
import { ShowService } from '../services/show.service';


@Component({
  selector: 'show-list',
  templateUrl: 'app/show-list/show-list.component.html',
})
export class ShowListComponent implements OnInit {
  myShows: Show[];
  errorMessage: string;

  constructor(private showService: ShowService) {  }

  ngOnInit() { this.getShows(); }

  getShows() {
    this.showService.getShows()
                    .subscribe(
                      shows => this.myShows = shows,
                      error => this.errorMessage = <any>error
                    );
  }
}

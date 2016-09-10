import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Show } from '../models/show';
import { ShowService } from '../services/show.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'show-list',
  templateUrl: 'app/show-list/show-list.component.html',
})
export class ShowListComponent implements OnInit {
  myShows: Show[];
  errorMessage: string;


  constructor(
    private showService: ShowService,
    private router: Router
  ) {  }

  selectedShow: Show;

  ngOnInit() { this.getShows(); }

  getShows() {
     this.showService.getShows()
                    .subscribe(
                      shows => this.myShows = shows,
                      error => this.errorMessage = <any>error
                    );
  }

  onSelectShow(show: Show) {
    this.selectedShow = show;
    // this.router.navigate(['/detail',show.imdbID]);
  }


}

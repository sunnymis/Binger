import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ShowService } from '../services/show.service';
import { Show } from '../models/show';


@Component({
  selector: 'show-details',
  templateUrl: 'app/show-details/show-details.component.html',
})
export class ShowDetailsComponent implements OnInit {

  show: Show;

  constructor(
    private showService: ShowService,
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    // this.route.params.forEach((params: Params) => {
    //   let id = params['id'];
    //   this.showService.getShow(id)
    //     .then(show => this.show = show )
    // });
  }
}

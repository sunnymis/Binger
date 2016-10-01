import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Show } from '../models/show';
import { ShowService } from '../services/show.service';
import { ShowComponent } from '../show/show.component';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'show-list',
  templateUrl: 'app/show-list/show-list.component.html',
  styleUrls: ['app/show-list/show-list.component.css']
})
export class ShowListComponent implements OnInit {
  myShows: Show[];

  @Input() showList: Show[];


  constructor(
    private showService: ShowService,
    private router: Router
  ) {  }

  selectedShow: Show;


  ngOnInit() {
    this.myShows = this.showList;
  }

  onSelectShow(show: Show,event) {
    this.selectedShow = show;
    console.log(this.selectedShow);
    this.router.navigate(['/details',this.selectedShow.imdbID]);
  }




}

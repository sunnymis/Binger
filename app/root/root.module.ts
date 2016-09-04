import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponent }  from './root.component';
import { ShowsComponent } from '../shows/shows.component';
import { ShowListComponent } from '../show-list/show-list.component';
import { NavComponent } from '../nav/nav.component';
import { FinishedShowsComponent } from '../finished-shows/finished-shows.component';
import { ShowDetailsComponent } from '../show-details/show-details.component';
import { routing, routedComponents } from './root.routing';

@NgModule({
  imports:      [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    ShowsComponent,
    ShowListComponent,
    NavComponent,
    FinishedShowsComponent,
    ShowDetailsComponent,
    routedComponents
  ],
  bootstrap:    [ RootComponent ]
})
export class RootModule { }

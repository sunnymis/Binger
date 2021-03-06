import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';

import {RootComponent}  from './root.component';
import {ShowIndexComponent} from '../show-index/show-index.component';
import {ShowListComponent} from '../show-list/show-list.component';
import {NavComponent} from '../nav/nav.component';
import {FinishedShowsComponent} from '../finished-shows/finished-shows.component';
import {ShowDetailsComponent} from '../show-details/show-details.component';
import {ShowComponent} from '../show/show.component';
import { SearchOverlayComponent } from '../search-overlay/search-overlay.component';
import { LandingComponent } from '../landing/landing.component';
import {routing, routedComponents} from './root.routing';
import {ShowService} from '../services/show.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        RootComponent,
        ShowIndexComponent,
        ShowListComponent,
        NavComponent,
        FinishedShowsComponent,
        ShowDetailsComponent,
        ShowComponent,
        SearchOverlayComponent,
        LandingComponent,
        routedComponents
    ],
    providers: [
        ShowService
    ],
    bootstrap: [RootComponent]
})
export class RootModule {
}

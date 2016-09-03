import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponent }  from './root.component';
import { ShowsComponent } from '../shows/shows.component';
import { ShowListComponent } from '../show-list/show-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    RootComponent,
    ShowsComponent,
    ShowListComponent
  ],
  bootstrap:    [ RootComponent ]
})
export class RootModule { }
